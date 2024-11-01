<?php

abstract class Uploadify_Model_FileMeta_Abstract {

	abstract public function getParentId();
	abstract public function checkOwner();
	abstract public function updateMeta( $key, $upload );
	abstract public function getMeta( $key, $parent_id = null );
	abstract public function getMetaType();

	/*
	* Get Handler
	*/
	public function createHandler( $name ) {
		$handler = false;
		$handler = apply_filters( Uploadify_Filter::GET_META_HANDLER, $handler, $name );
		return $handler;
	}
	
	/*
	* Upload mode handler
	*/
	public function setUploadModeHandler( $handler ) {
		$this->mode_handler = $handler;
	}
	
	/*
	* Permissions
	*/
	
	public function checkSave( $uploads ) {
		if ( ! $this->checkPermissions() && ! $this->checkAdmin() ) return false;
		return true;
	}
	
	public function checkPermissions() {
		// check to see if this is turned off in options
		if ( ! Uploadify_Model_Settings::isCheckPermissions() ) return true;
		$user = wp_get_current_user();
		return $this->checkOwner( $user );
	}
	
	/*
	* check if current user is admin
	*/

	public function checkAdmin() {
		$user = wp_get_current_user();
		if ( ! in_array( 'administrator', $user->roles ) ) return false;
		return true;
	}

	/*
	* Prepend to or overwrite existing metadata
	*/
	public function applyChanges( $inputname, $file_id ) {
		$meta = $this->getMeta( $inputname );
		$meta = $this->mode_handler->filterMeta( $file_id, $meta );
		$this->saveMeta( array( $inputname => $meta ) );
	}
	
	/*
	* Save meta data
	*/
	public function saveMeta( $uploads ) {	
		if ( $this->checkSave( $uploads ) ) {
			foreach( $uploads as $key => $files ) {
				$files = $this->removeUnauthored( $files );
				$this->updateMeta( $key, $files );
			}
		}
	}
	
	/*
	* Remove old files if they exist
	*/
	
	public function checkRemoveOld( $key ) {
		if ( "single" != $this->mode_handler->getMode() ) return;
		$files = $this->getMeta( $key );
		while( $file = array_shift( $files ) ) {
			Uploadify_Model_Posttype_File::remove( $file );
		}
	
	}
	
	/*
	* Methods to modify meta data arrays
	*/
	
	public function removeUnauthored( $files ) {
		$temp = array();
		while( $fileid = array_shift( $files ) ) {
			if ( ! Uploadify_Model_Posttype_File::checkFileAuthor( $fileid ) ) {
				continue;
			}
			$temp[] = $fileid;
		}
		return $temp;
	}
	
	public function removeAssociation( $fileId, $inputname ) {
		$meta = $this->getMeta( $inputname );
		$meta = self::getRemovedFromMeta( $meta, $fileId );
		$this->updateMeta( $inputname, $meta );
	}

	public function getRemovedFromMeta( $meta, $fileId ) {
		// save all files but the file to remove to a temporary array
		$temp = array();
		while( $file = array_shift( $meta ) ) {
		if ( $file == $fileId ) continue;
			$temp[] = $file;
		}
		return $temp;
	}
	
	
}
?>

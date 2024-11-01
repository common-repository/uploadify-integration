<?php

class Uploadify_Model_FileMeta_Temporary extends Uploadify_Model_FileMeta_Abstract {

	private $meta_type = "temporary";
	
	public function getMetaType() {
		return $this->meta_type;
	}
	
	public function getMeta( $key, $parent_id = null ) {
		$files = (array) $_SESSION[self::getKey($key)];
		return $files;
	}

	public function getKey( $key ) {
		$key = sprintf( '%s_%s', 'uploadify', $key );
		return $key;
	}

	public function getParentId() {
		return 0;
	}

	public function updateMeta( $key, $files ) {
		$_SESSION[self::getKey($key)] = $files;
	}
	
	public function checkOwner() {
		return true;
	}
	
	public static function getHandler( $handler, $name ) {
		if ( $name != "temporary" ) return $handler;
		$handler = new Uploadify_Model_FileMeta_Temporary();
		return $handler;
	}

	/*
	* Clear $_SESSION if user visits the page again
	* Uploaded files will remain.
	*/
	public static function clear( $output, $atts ) {
		extract( $atts );
		if ( 'temporary' != $metatype ) return $output;
		
		$key = self::getKey($inputname );
		
		unset( $_SESSION[$key] );

		return $output;
	}
	
}
?>

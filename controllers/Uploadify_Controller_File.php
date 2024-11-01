<?php
require_once( ABSPATH . "wp-admin" . '/includes/image.php');
require_once( ABSPATH . "wp-admin" . '/includes/file.php');
require_once( ABSPATH . "wp-admin" . '/includes/media.php');

class Uploadify_Controller_File
{
	public static function uploadAction()
	{
		$view = new Uploadify_View();

		// allow retrieval of current logged in user
		// we need to do this because this is called from a flash script
		$_COOKIE[LOGGED_IN_COOKIE] = $_POST['logged_in_cookie'];
		$uid = wp_validate_auth_cookie( $_COOKIE[LOGGED_IN_COOKIE], "logged_in" );
		wp_set_current_user( $uid );
		
		// allow retrieval of current session
		// we need to do this because this is called from a flash script
		if ( ! session_id() ) {
			session_id( Uploadify_Model_Encrypt::decrypt( $_POST['session_id'] ) );
			session_start();
		}
		
		if ( ! ( $metahandler = Uploadify_Model_FileMeta_Abstract::createHandler( $_POST['metatype'] ) ) ) return;
		if ( ! ( $modehandler = Uploadify_Model_UploadMode_Abstract::createHandler( $_POST['uploadmode'] ) ) ) return;

		if ( ! $metahandler->checkPermissions() ) {
			echo $view->load( 'file/error.php', array(
				'error' => 'You do not have permission to do that.'
			) );
			die();
		}
		
		$inputname = $_POST['inputname'];
		
		// before updating meta data, check to see if we should cleanup a previous file
		$metahandler->setUploadModeHandler( $modehandler );
		$metahandler->checkRemoveOld( $inputname );
		
		$time = date('Y/m');
		$file = wp_handle_upload( $_FILES['Filedata'], array( 'test_form' => false ), $time );
	
		if ( ! empty( $file['error'] ) ) {
			echo $view->load( 'file/error.php', array(
				'error' => $file['error']
			) );
			die();
		}

		$info = pathinfo($file['file']);
		
		$fileid = Uploadify_Model_Posttype_File::insert( $info, $metahandler, $time );
		$metahandler->applyChanges( $inputname, $fileid ); // save metadata
		
		echo $view->load( 'file/upload.php', array(
			'metahandler' => $metahandler,
			'inputname' => $inputname
		) );

		do_action( Uploadify_Action::FILE_UPLOAD, $file, $fileid, $metahandler );
		
		die();
	}
	
	/*
	* Removing ( WP Ajax Hook )
	*/
	
	public static function removeAction() {
	
		$fileId = $_POST['fileId'];
		$inputname = $_POST['inputName'];
		
		if ( $metahandler = Uploadify_Model_FileMeta_Abstract::createHandler( $_POST['metaType'] ) ) {
			if ( // // Can remove association?
				$metahandler->checkOwner() || 
				$metahandler->checkAdmin() 
			) { // then it is okay to remove the file from the parent meta
				$metahandler->removeAssociation( $fileId, $inputname );
			}
		}
	
		// Unlink if allowed
		Uploadify_Model_Posttype_File::remove( $fileId );
		die();
	}
		
	
}
?>

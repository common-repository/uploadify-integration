<?php

class Uploadify_Model_Posttype_File {

	public static function registerType() {
	
		$labels = array(
			'name' => _x( 'AW Files', 'post type general name' ),
			'singular_name' => _x( 'AW File', 'post type singular name' ),
			'add_new' => _x( 'Add New', 'aw_file' ),
			'add_new_item' => __( 'Add New File' ),
			'parent' => __( 'Parent Listing' )
		);
		
		$args = array(
			'labels' => $labels,
			'publicly_queryable' => false,
			'show_ui' => false,
			'query_var' => false,
			'capability_type' => 'post',
			'hierarchical' => false,
			'menu_position' => null,
			'supports' => array('title', 'revisions', 'editor', 'custom_fields' )
		);

		register_post_type( 'aw_file', $args );
	}
	
	/*
	* Insert the file post object
	*/
	public function insert( $info, $metahandler, $time ) {
		$filename = $info['basename'];
	
		$user = wp_get_current_user();
		$args = array(
			'post_title' => $filename,
			'post_content' => $filename,
			'post_status' => 'publish',
			'post_author' => $user->ID,
			'post_type' => 'aw_file'
		);
		$post_id = wp_insert_post( $args );
		
		update_post_meta( $post_id, 'meta_type', $metahandler->getMetaType() );
		update_post_meta( $post_id, 'base_upload_path', self::getBasePath( $time ) );
		update_post_meta( $post_id, 'base_upload_url', self::getBaseUrl( $time ) );
		
		return $post_id;
	}

	/*
	* Unlink the file
	*/
	public function remove( $fileId ) {
		if ( ! ( self::checkFileAuthor( $fileId ) || Uploadify_Model_FileMeta_Abstract::checkAdmin() ) ) return;	
		$file = get_post( $fileId );			
		if ( ! ( strlen( $file->post_title ) > 0 ) ) return;
		
		$path = self::getFilePath( $file->ID );	
		if ( file_exists( $path ) ) unlink( $path );
		wp_delete_post( $file->ID, true );
	}
	
	/*
	* Check if the current user uploaded the file
	*/
	public function checkFileAuthor( $fileid ) {
		if ( ! Uploadify_Model_Settings::isCheckPermissions() ) return true;
		$file = get_post( $fileid );
		$user = wp_get_current_user();
		
		if ( $file->post_author == $user->ID ) return true;
		return false;
	}
	
	
	public function getFileUrl( $fileid ) {
		$file = get_post( $fileid );
		if ( ! ( strlen( $file->post_title ) > 0 ) ) return;
		
		if ( ! ( $base = get_post_meta( $fileid, 'base_upload_url', true ) ) ) return '';
		return $base . '/' . $file->post_title;
	}
	
	public function getFilePath( $fileid ) {
		$file = get_post( $fileid );
		if ( ! ( strlen( $file->post_title ) > 0 ) ) return;
		
		$base = get_post_meta( $fileid, 'base_upload_path', true );	
		return $base . '/' . $file->post_title;
	}
	
	public function getBasePath( $time ) {
		$info = wp_upload_dir( $time );
		return $info['path'];
	}
	
	public function getBaseUrl( $time ) {
		$info = wp_upload_dir( $time );
		return $info['url'];
	}

	public static function uploadDirFilter( $upload_dir )
	{
		if ( 'uploadify_upload' != $_POST['action'] ) return $upload_dir;

		if ( empty( $_POST['path'] ) ) return $upload_dir;

		$path = Uploadify_Model_Encrypt::decrypt( $_POST['path'] );

		$url = '';
		if ( ! empty( $_POST['url'] ) ) {
			$url = Uploadify_Model_Encrypt::decrypt( $_POST['url'] );
		}

		$upload_dir['path'] = $path;
		$upload_dir['url'] = $url;

		return $upload_dir;
	}

	public static function wpHandleUploadFilter( $file, $mode ) {
		if ( 'uploadify_upload' != $_POST['action'] ) return $file;
		$file = apply_filters( Uploadify_Filter::HANDLE_UPLOAD, $file );
		return $file;
	}

	/*
	* Filter to display a thumbnail for images
	*/
	public static function getFileView( $file, $fileid )
	{
		if ( ! get_post_meta( $fileid, 'base_upload_url', true ) ) {
			return UPLOADIFY_DIR . 'views/scripts/partials/file_nourl.php';
		}

		$post = get_post( $fileid );
		$ext = strtolower( end( explode( '.', $post->post_title ) ) );
		switch( $ext ) {
			case "jpg":
			case "jpeg":
			case "png":
			case "gif":
				return UPLOADIFY_DIR . 'views/scripts/partials/file_thumbnail.php';
				break;
			default:
				return UPLOADIFY_DIR . 'views/scripts/partials/file_single_line.php';	
		}
	}

	public static function getThumbnailUrl( $path, $url, $width, $height ) {
	
		$resized_file = image_resize($path, $width, $height, true );

		if ( is_wp_error( $resized_file ) ) {
			return $url;
		}

		$info = pathinfo( $resized_file );

		$filename = end( explode( '/', $url ) );
		$base_url = str_replace( $filename, '', $url );

		$new_url = $base_url . $info['basename'];
		return $new_url;
	}
	
}

?>

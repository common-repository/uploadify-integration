<?php

class Uploadify_Model_FileMeta_Post extends Uploadify_Model_FileMeta_Abstract {

	private $meta_type = "post";
	
	public function getMetaType() {
		return $this->meta_type;
	}
	
	public function getMeta( $key, $parent_id = null ) {
		if ( empty( $parent_id ) ) $parent_id = $this->getParentId();
		$files = get_post_meta( $parent_id, $key, true );
		$files = ( array ) $files;
		return $files;
	}

	public function getParentId() {
		if ( ! empty( $_POST['parentId'] ) ) return $_POST['parentId'];
		global $post;
		return $post->ID;
	}
	
	public function updateMeta( $key, $files ) {
		update_post_meta( $this->getParentId(), $key, $files );
	}
	
	public function checkOwner() {
		$user = wp_get_current_user();
		$post = get_post( $this->getParentId() );
		if ( $user->ID != $post->post_author ) return false;
		return true;
	}
	
	public static function getHandler( $handler, $name ) {
		if ( $name !=  "post" ) return $handler;	
		$handler = new Uploadify_Model_FileMeta_Post();
		return $handler;
	}
	
}
?>

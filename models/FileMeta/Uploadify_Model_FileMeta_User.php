<?php

class Uploadify_Model_FileMeta_User extends Uploadify_Model_FileMeta_Abstract
{
	private $meta_type = "user";
	
	public function getMetaType()
	{
		return $this->meta_type;
	}
	
	/*
	* Get the user id.
	*/
	public function getParentId()
	{
		if ( ! empty( $_POST['parentId'] ) ) return $_POST['parentId'];
		$user = wp_get_current_user();
		return $user->ID;
	}	
	
	/*
	* Get user meta
	*/
	public function getMeta( $key, $parent_id = null )
	{
		if ( empty( $parent_id ) ) $parent_id = $this->getParentId();
		$files = get_user_meta( $parent_id, $key, true );
		$files = ( array ) $files;
		return $files;
	}
	
	public function updateMeta( $key, $files )
	{
		update_user_meta( $this->getParentId(), $key, $files );
	}
	
	/*
	* Check to make sure current logged in user is the same as the file owner.
	*/
	public function checkOwner()
	{
		$user1 = wp_get_current_user();
		$user2 = get_userdata( $this->getParentId() );
		if ( $user1->ID != $user2->ID ) return false;
		return true;
	}
	
	/*
	* Filter for uploadify_get_file_meta_handler
	*/
	public static function getHandler( $handler, $name ) {
		if ( $name != "user" ) return $handler;
		
		$handler = new Uploadify_Model_FileMeta_User();
		return $handler;
	}
}
?>

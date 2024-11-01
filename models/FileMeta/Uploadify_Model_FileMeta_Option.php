<?php

class Uploadify_Model_FileMeta_Option extends Uploadify_Model_FileMeta_Abstract {

	private $meta_type = "option";
	
	public function getMetaType() {
		return $this->meta_type;
	}
	
	public function getMeta( $key, $parent_id = null ) {
		$files = get_option( $key );
		$files = ( array ) $files;
		return $files;
	}

	public function getParentId() {
		return 0;
	}
	
	public function updateMeta( $key, $files ) {
		update_option( $key, $files );
	}
	
	public function checkOwner() {
		return true;
	}
	
	public static function getHandler( $handler, $name ) {
		if ( $name != "option" ) return $handler;
		$handler = new Uploadify_Model_FileMeta_Option();
		return $handler;
	}
	
}
?>

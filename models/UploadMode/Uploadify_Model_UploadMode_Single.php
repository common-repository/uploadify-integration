<?php
class Uploadify_Model_UploadMode_Single extends Uploadify_Model_UploadMode_Abstract {

	private $mode = "single";
	
	public function getMode() {
		return $this->mode;
	}
	
	public function filterMeta( $fileId, $meta ) {
		$meta = ( array ) $fileId;
		return $meta;
	}
	
	public static function getHandler( $handler, $name ) {
		if ( $name != 'single' ) return $handler;
		
		$handler = new Uploadify_Model_UploadMode_Single();
		return $handler;
	}
	
}
?>
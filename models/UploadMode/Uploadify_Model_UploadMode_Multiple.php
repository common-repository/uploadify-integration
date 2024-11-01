<?php
class Uploadify_Model_UploadMode_Multiple extends Uploadify_Model_UploadMode_Abstract {

	private $mode = "multiple";
	
	public function getMode() {
		return $this->mode;
	}
	
	public function filterMeta( $fileId, $meta ) {
		if ( ! in_array( $fileId, $meta ) ) array_unshift( $meta, $fileId );
		return $meta;
	}
	
	public static function getHandler( $handler, $name ) {
		if ( $name != 'multiple' ) return $handler;
		
		$handler = new Uploadify_Model_UploadMode_Multiple();
		return $handler;
	}
}
?>
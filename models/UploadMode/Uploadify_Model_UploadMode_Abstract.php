<?php
abstract class Uploadify_Model_UploadMode_Abstract {

	public abstract function filterMeta( $fileId, $meta );
	
	public function createHandler( $name ) {
		$handler = false;
		$handler = apply_filters( Uploadify_Filter::GET_MODE_HANDLER, $handler, $name );
		return $handler;
	}
	
}
?>
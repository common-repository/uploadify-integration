<?php
class Uploadify_View_Helper_GetFileUrl extends Uploadify_View_Helper
{
	public function getFileUrl( $args ) {
		$model = new Uploadify_Model_Posttype_File();
		return $model->getFileUrl( $args[0] );
	}
}
?>
<?php
class Uploadify_View_Helper_GetFileThumbnailUrl {

	public function getFileThumbnailUrl( $args ) {

		$fileid = $args[0];

		$width = $args[1];
		$height = $args[2];

		$path = Uploadify_Model_Posttype_File::getFilePath( $fileid );
		$url = Uploadify_Model_Posttype_File::getFileUrl( $fileid );

		return Uploadify_Model_Posttype_File::getThumbnailUrl( $path, $url, $width, $height );
	}
}
?>

<?php
class Uploadify_View_Helper_GetThumbnailUrl extends Uploadify_View_Helper
{
	public function getThumbnailUrl( $args )
	{
		$path = $args[0];
		$url = $args[1];
		$width = $args[2];
		$height = $args[3];

		return Uploadify_Model_Posttype_File::getThumbnailUrl( $path, $url, $width, $height );
	}
}
?>

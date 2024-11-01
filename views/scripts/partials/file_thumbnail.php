<?php
$post = get_post( $fileid ); 
$width = 100;
$height = 100;
?>
<div style="width:<?php echo $width ?>px;height:<?php echo $height ?>px;" class="uploadify-thumbnail-wrapper">
	<a class="thickbox" href="<?php echo $this->getFileUrl( $post->ID ) ?>" target="_blank">
		<img src="<?php echo $this->getFileThumbnailUrl( $post->ID, $width, $height ) ?>"/>
	</a>
	<img class="uploadify-remove" src="<?php echo UPLOADIFY_URL ?>resources/cancel.png"/>
</div>

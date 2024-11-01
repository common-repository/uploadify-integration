<?php $file = get_post( $fileid ); ?>
<a href="<?php echo $this->getFileUrl( $file->ID ) ?>" target="_blank"><?php echo $file->post_title ?></a>
<img class="uploadify-remove" src="<?php echo UPLOADIFY_URL ?>resources/cancel.png"/>
<br/>
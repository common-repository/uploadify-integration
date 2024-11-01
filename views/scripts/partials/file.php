<div class="uploadify-file">
	<input class="fileid" type="hidden" value="<?php echo wp_kses( $fileid ); ?>" name="<?php echo wp_kses( $inputname ); ?>"/>
	<?php
	$file = "";
	$file = apply_filters( Uploadify_Filter::GET_FILE_VIEW, $file, $fileid );
	include( $file );
	?>
</div>

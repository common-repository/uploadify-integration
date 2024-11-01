<select name="<?php echo $this->settingsInputName( Uploadify_Model_Settings::KEY_DEFAULT_FILE_SIZE_LIMIT ) ?>"/>
	<?php echo $this->fileSizeLimitOptions(); ?>
</select>
<label style="color:red;font-weight:bold;">The current <span style="font-style:italic;">upload_max_filesize</span> is <?php echo Uploadify_Model_Settings::getUploadMaxFilesize() ?></label>
<a target="_blank" href="http://www.wpbeginner.com/wp-tutorials/how-to-increase-the-maximum-file-upload-size-in-wordpress/">How to inclease the maximum file upload size.</a>

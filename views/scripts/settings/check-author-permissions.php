<?php
$name = $this->settingsInputName( Uploadify_Model_Settings::KEY_CHECK_AUTHOR_PERMISSIONS );
echo $this->checkbox( $name, Uploadify_Model_Settings::isCheckPermissions() ); ?>
<label for="<?php echo $name ?>">Uncheck this if you require non-logged in users to upload files (dangerous)</label>
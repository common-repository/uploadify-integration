<?php 
$name = $this->settingsInputName( Uploadify_Model_Settings::KEY_GLOBAL_SCRIPTS );
echo $this->checkbox( $name, Uploadify_Model_Settings::isGlobalScripts() ); ?>
<label for="<?php echo $name ?>">
	Uncheck this if you wish to allow Uploadify Integration to attempt to detect when the shortcode is used.<br/>
	If you decide to not enclude scripts on every page, and Uploadify Integration fails to detect the shortcode, then you must include the scripts manually.<br/>
	<span style="font-style:italic;">add_action( 'init', 'Uploadify_Model_Shortcode::_enqueueScripts' );</span>
</label>
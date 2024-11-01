<div class="wrap">
	<h2>Uploadify Integration Options</h2>
	<form method="post" action="options.php">
		<?php settings_fields( Uploadify_Model_Settings::NAME_OPTION ); ?>
		<?php do_settings_sections( Uploadify_Model_Settings::NAME_PAGE ); ?>
		<input type="hidden" name="<?php echo Uploadify_Model_Settings::NAME_OPTION ?>[<?php echo Uploadify_Model_Settings::KEY_RUN_ONCE ?>]" value="1"/>
		<p class="submit">
			<input type="submit" class="button-primary" value="Save Changes" />
		</p>
	</form>
</div>
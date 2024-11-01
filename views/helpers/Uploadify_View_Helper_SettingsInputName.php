<?php
class Uploadify_View_Helper_SettingsInputName extends Uploadify_View_Helper
{
	public function settingsInputName( $args )
	{	
		return sprintf( "%s[%s]",
			Uploadify_Model_Settings::NAME_OPTION,
			$args[0]
		);
	}
}
?>
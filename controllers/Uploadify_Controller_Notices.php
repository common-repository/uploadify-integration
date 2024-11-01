<?php
class Uploadify_Controller_Notices {

	/*
	* Plugin messages
	*/
	public static function indexAction() {
		// message displays when plugin is activated
		if ( Uploadify_Model_Settings::runOnce() ) {
			echo Uploadify_Controller_Settings::activationMessageAction();
		}
	}

}	
?>
<?php
class Uploadify_Controller_Settings
{
	
	public static function addAdminMenu() 
	{
		add_options_page( 'Uploadify Integration', 'Uploadify Integration', 'manage_options', Uploadify_Model_Settings::NAME_PAGE, 'Uploadify_Controller_Settings::frontController' );
	}

	public static function frontController() 
	{
		echo Uploadify_Controller_Settings::indexAction();
	}
	
	public static function indexAction() 
	{
		$view = new Uploadify_View();
		return $view->load( 'settings/index.php' );
	}
	
	public static function generalTextAction()
	{
		return;
	}
	
	public static function globalScriptsAction()
	{
		$view = new Uploadify_View();
		echo $view->load( 'settings/global-scripts.php' );
	}
	
	public static function checkAuthorPermissionsAction()
	{
		$view = new Uploadify_View();
		echo $view->load( 'settings/check-author-permissions.php' );
	}
	
	public static function defaultFileSizeLimitAction()
	{
		$view = new Uploadify_View();
		echo $view->load( 'settings/default-file-size-limit.php' );
	}
	
	public function activationMessageAction()
	{
		$view = new Uploadify_View();
		echo $view->load( 'settings/activation-message.php' );
	}

}
?>

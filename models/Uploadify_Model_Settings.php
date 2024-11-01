<?php
class Uploadify_Model_Settings {

	const NAME_OPTION = 'uploadify_integration';
	const NAME_PAGE = 'uploadify_integration_settings';
	const NAME_OPTION_GROUP_GENERAL = 'uploadify_option_group_general';
	
	const KEY_GLOBAL_SCRIPTS = 'uploadify_global_scripts';
	const KEY_RUN_ONCE = 'uploadify_run_once';
	const KEY_DEFAULT_FILE_SIZE_LIMIT = 'uploadify_default_file_size_limit';
	const KEY_CHECK_AUTHOR_PERMISSIONS = 'uploadify_check_author_permissions';
	const KEY_UPLOAD_PATH = 'uploadify_upload_path';
	
	/*
	* Register Settings
	*/
	
	public static function registerSettings() {
		register_setting( self::NAME_OPTION, self::NAME_OPTION );
		add_settings_section( self::NAME_OPTION_GROUP_GENERAL, 'General Settings', 'Uploadify_Controller_Settings::generalTextAction', self::NAME_PAGE ); // section id, title, callback, page name
		
		add_settings_field(
			self::KEY_GLOBAL_SCRIPTS,
			'Include JavaScript and CSS on every page', // label
			'Uploadify_Controller_Settings::globalScriptsAction', // callback
			self::NAME_PAGE, // page name
			self::NAME_OPTION_GROUP_GENERAL // section
		);
		
		add_settings_field(
			self::KEY_CHECK_AUTHOR_PERMISSIONS,
			'Check Author Permissions', // label
			'Uploadify_Controller_Settings::checkAuthorPermissionsAction', // callback
			self::NAME_PAGE, // page name
			self::NAME_OPTION_GROUP_GENERAL // section
		);
		
		add_settings_field(
			self::KEY_DEFAULT_FILE_SIZE_LIMIT,
			'Default File Size Limit (M)',
			'Uploadify_Controller_Settings::defaultFileSizeLimitAction',
			self::NAME_PAGE,
			self::NAME_OPTION_GROUP_GENERAL
		);

	}
	
	/*
	* Getters
	*/
	
	public function getUploadMaxFilesizeInt() {
		$size = self::getUploadMaxFilesize();
		$max = 0;
		if ( strlen( $size ) > 0 ) {
			$pattern = '/(\d+)M/';
			$matches = array();
			$num = preg_match( $pattern, $size, $matches );
			$max = ( int ) $matches[1];
		}
		return $max;
	}
	
	public function getUploadMaxFilesize() {
		$inis = ini_get_all();
		$sizes = $inis['upload_max_filesize'];
		if ( strlen( $sizes['local_value'] ) > 0 ) return $sizes['local_value'];
		return $sizes['global_value'];
	}

	public function getUploadPath() {
		$options = get_option( self::NAME_OPTION );
		$path = $options[self::KEY_UPLOAD_PATH];
		return $path;
	}
	
	public function runOnce( $key = self::KEY_RUN_ONCE ) {
		$options = get_option( self::NAME_OPTION );
		if ( $options[$key] ) return false;
		$options[$key] = 1;
		update_option( self::NAME_OPTION, $options );
		return true;
	}
		
	public static function setInitialOptions() {
		update_option( self::NAME_OPTION, array(
			self::KEY_DEFAULT_FILE_SIZE_LIMIT => self::getUploadMaxFilesizeInt(),
			self::KEY_CHECK_AUTHOR_PERMISSIONS => 1,
			self::KEY_RUN_ONCE => 0,
			self::KEY_GLOBAL_SCRIPTS => 1
		) );
	}
	
	public function isCheckPermissions() {
		$options = get_option( self::NAME_OPTION );
		$permissions = ( int ) $options[self::KEY_CHECK_AUTHOR_PERMISSIONS];
		if ( $permissions == 1 ) return true;
		return false;
	}
	
	public function isGlobalScripts() {
		$options = get_option( self::NAME_OPTION );
		$global = ( int ) $options[self::KEY_GLOBAL_SCRIPTS];
		if ( $global == 1 ) return true;
		return false;
	}
	
}
?>

<?php
class Uploadify_Filter
{
	/**
	 * Filter the path to a view for displaying an uploaded file
	 * 
	 * @var string path
	 * @var int file id
	 * @returns string path
	 */
	const GET_FILE_VIEW = 'uploadify_get_file_view';
	
	/**
	 * Wrapper for wp_handle_upload to allow file to be modified before saving to meta data
	 * 
	 * @var array file
	 * @returns array file
	 */
	const HANDLE_UPLOAD = 'uploadify_handle_upload';

	/**
	 * Filter autoloader class path
	 * 
	 * @var string path
	 * @var string name
	 * @var array name parts exploded by "_"
	 * @returs string path
	 */	
	const GET_CLASS_PATH = 'uploadify_get_class_path';
	
	/**
	 * Filter for file meta handler 
	 * 
	 * @var Concrete class extending Uploadify_Model_FileMeta_Abstract
	 * @var string identifier
	 * @returns Concrete class extending Uploadify_Model_FileMeta_Abstract
	 */	
	const GET_META_HANDLER = 'uploadify_get_file_meta_handler';
	
	/**
	 * Filter for upload mode handler
	 * 
	 * @var Concrete class extending Uploadify_Model_UploadMode_Abstract
	 * @var string identifier
	 * @returs Concrete class extending Uploadify_Model_UploadMode_Abstract
	 */
	const GET_MODE_HANDLER = 'uploadify_get_upload_mode_handler';

	/**
	 * Filter for css url
	 * 
	 * @var string url
	 * @returns string url
	 */	
	const GET_CSS_URL = 'uploadify_get_css_url';

	/**
	 * Allow an action before displaying shortcode content
	 *
	 * @var string output
	 * @var array atts
	 * @returns string output
	*/
	const PRE_SHORTCODE = 'uploadify_pre_shortcode';

	/**
	 * Allow an action after displaying shortcode content
	 *
	 * @var string output
	 * @var array atts
	 * @returns string output
	*/
	const POST_SHORTCODE = 'uploadify_post_shortcode';

}
?>

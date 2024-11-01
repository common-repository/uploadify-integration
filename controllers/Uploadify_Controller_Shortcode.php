<?php
class Uploadify_Controller_Shortcode {
	
	static $view;
	
	public static function indexAction( $atts ) {
		self::$view = new Uploadify_View();

		$atts = self::getOutputArgs( $atts );
		
		if ( ! $atts['metahandler']->checkPermissions() ) {
			return self::$view->load( 'file/error.php', array(
				'error' => 'You do not have permission to do that.'
			) );
		}

		$output = "";
		$output = apply_filters( Uploadify_Filter::PRE_SHORTCODE, $output, $atts );
		$output .= self::$view->load( 'shortcode/index.php', $atts );
		$output = apply_filters( Uploadify_Filter::POST_SHORTCODE, $output, $atts );
		return $output;
	}
	
	public function getOutputArgs( $atts ) {
		
		$options = get_option( 'awuploadify_options' );
		
		extract( shortcode_atts( array(
			'inputname' => 'files',
			'metatype' => 'post',
			'buttontext' => 'Upload File',
			'filetypedesc' => 'All Files',
			'filetypeexts' => '*.*',
			'filesizelimit' => $options['default_file_size_limit'],
			'uploadmode' => 'single',
			'path' => '',
			'url' => ''
		), $atts ) );
		
		$metahandler = Uploadify_Model_FileMeta_Abstract::createHandler( $metatype );
		$metahandler->setUploadModeHandler( Uploadify_Model_UploadMode_Abstract::createHandler( $uploadmode ) );
		
		if ( ! empty( $path ) ) $path = Uploadify_Model_Encrypt::encrypt( $path );
		if ( ! empty( $url ) ) $url = Uploadify_Model_Encrypt::encrypt( $url );

		return array(
			'inputname' => $inputname,
			'uploadmode' => $uploadmode,
			'metatype' => $metatype,
			'parentid' => $metahandler->getParentId(),
			'buttontext' => $buttontext,
			'filetypedesc' => $filetypedesc,
			'filetypeexts' => $filetypeexts,
			'filesizelimit' => $filesizelimit,
			'metahandler' => $metahandler,
			'path' => $path,
			'url' => $url
		);
	}

}

?>

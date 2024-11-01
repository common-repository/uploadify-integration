<?php
class Uploadify_Model_Shortcode
{
	static $_enqueued = false;	

	public static function enqueueScripts() {
		if ( ! self::isShortcodeUsed() ) return;
		self::_enqueueScripts();
	}
	
	public function _enqueueScripts() {
		if ( self::$_enqueued ) return;

		if ( ! session_id() ) session_start();

		wp_register_script( 'uploadify-js', UPLOADIFY_URL . 'resources/uploadify.js', array( 'jquery' ), '1.0', true );
		wp_enqueue_script( 'uploadify-js' );
		wp_localize_script( 'uploadify-js', 'wp_localized', array( 
			'logged_in_cookie' => ( $_COOKIE[LOGGED_IN_COOKIE] ) ? $_COOKIE[LOGGED_IN_COOKIE] : 0,
			'session_id' => Uploadify_Model_Encrypt::encrypt( session_id() ),
			'ajax_url' => admin_url( 'admin-ajax.php' ),
			'relative_url' => UPLOADIFY_RELATIVE_URL
		) );
		wp_enqueue_script( 'thickbox' );
		wp_enqueue_style( 'thickbox' );
		
		$css_url = UPLOADIFY_URL . 'resources/uploadify.css';
		$css_url = apply_filters( UPLOADIFY_FILTER::GET_CSS_URL, $css_url );
		
		wp_enqueue_style( 'uploadify-css', $css_url );
		self::$_enqueued = true;
	}
		
	public function isShortcodeUsed() {
		if ( Uploadify_Model_Settings::isGlobalScripts() ) return true;
	
		$pattern = get_shortcode_regex();
		global $posts;		
		preg_match( '/'.$pattern.'/s',
			$posts[0]->post_content,
			$matches
		);
		if ( is_array($matches) &&
			in_array( 'uploadify', $matches )
		) return true;
		return false;
	}
	
}
?>

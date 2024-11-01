<?php
add_filter( Uploadify_Filter::GET_CLASS_PATH, 'Uploadify_AutoLoad::getViewHelperPath', 10, 3 );
add_filter( Uploadify_Filter::GET_CLASS_PATH, 'Uploadify_AutoLoad::getUploadModePath', 10, 3 );
add_filter( Uploadify_Filter::GET_CLASS_PATH, 'Uploadify_AutoLoad::getFileMetaPath', 10, 3 );
add_filter( Uploadify_Filter::GET_CLASS_PATH, 'Uploadify_AutoLoad::getModelPath', 10, 3 );
add_filter( Uploadify_Filter::GET_CLASS_PATH, 'Uploadify_AutoLoad::getControllerPath', 10, 3 );

class Uploadify_AutoLoad
{
	public static function autoLoad( $name ) {
		$parts = explode( '_', $name );
		if ( 'Uploadify' != $parts[0] ) return;
		$path = '';
		$path = apply_filters( Uploadify_Filter::GET_CLASS_PATH, $path, $name, $parts );
		if ( '' == $path ) return;
		require_once( $path );
	}
	
	public static function getViewHelperPath( $path, $name, $parts ) {
		if ( '' != $path ) return $path;
		if ( "View" != $parts[1] ) return $path;
		if ( "Helper" != $parts[2] ) return $path;
		
		return sprintf( '%sviews/helpers/%s.php',
			UPLOADIFY_DIR,
			$name
		);
	}
	
	public static function getControllerPath( $path, $name, $parts ) {
		if ( '' != $path ) return $path;
		if ( "Controller" != $parts[1] ) return $path;
		
		return sprintf( '%scontrollers/%s.php',
			UPLOADIFY_DIR,
			$name
		);
	}
	
	public static function getModelPath( $path, $name, $parts ) {
		if ( '' != $path ) return $path;
		if ( "Model" != $parts[1] ) return $path;
		
		return sprintf( '%smodels/%s.php',
			UPLOADIFY_DIR,
			$name
		);
	}
	
	public static function getUploadModePath( $path, $name, $parts ) {
		if ( '' != $path ) return $path;
		if ( "Model" != $parts[1] ) return $path;
		if ( "UploadMode" != $parts[2] ) return $path;
		
		return sprintf( '%smodels/UploadMode/%s.php',
			UPLOADIFY_DIR,
			$name
		);
	}

	public static function getFileMetaPath( $path, $name, $parts ) {
		if ( '' != $path ) return $path;
		if ( "Model" != $parts[1] ) return $path;
		if ( "FileMeta" != $parts[2] ) return $path;
		
		return sprintf( '%smodels/FileMeta/%s.php',
			UPLOADIFY_DIR,
			$name
		);
	}
	
}

spl_autoload_register( 'Uploadify_AutoLoad::autoLoad' );
?>
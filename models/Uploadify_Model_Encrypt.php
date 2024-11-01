<?php
/*
* http://www.php.net/manual/en/book.mcrypt.php 
*/

class Uploadify_Model_Encrypt
{

	private static $algorithm = MCRYPT_RIJNDAEL_256;
	private static $mode = MCRYPT_MODE_ECB;
	private static $td;
	private static $iv;

	public function encrypt( $string )
	{
		mcrypt_generic_init( self::getTd(), self::getKey(), self::getIv() );
		
		$string = trim(base64_encode( mcrypt_generic( self::getTd(), $string ) ));
		
		mcrypt_generic_deinit( self::getTd() );
		mcrypt_module_close( self::getTd() );
		self::$td = null;
	
		return $string;	
	}

	public function decrypt( $string )
	{
		mcrypt_generic_init( self::getTd(), self::getKey(), self::getIv() );
		$string = mdecrypt_generic( self::getTd(), base64_decode( $string ) );
		
		mcrypt_generic_deinit( self::getTd() );
		mcrypt_module_close( self::getTd() );
		self::$td = null;

		return trim($string);
	}

	private function getKey() {
		return substr( AUTH_SALT, 0, 32 );
	}

	private function getTd()
	{
		if ( ! self::$td ) {
			self::$td = mcrypt_module_open( self::$algorithm, '', self::$mode, '' );
		}
		return self::$td;
	}

	private function getIv()
	{
		if ( ! self::$iv ) {
			self::$iv = mcrypt_create_iv( 
				mcrypt_enc_get_iv_size( self::getTd() ),
				MCRYPT_RAND
			);
		}
		return self::$iv;
	}
}
?>

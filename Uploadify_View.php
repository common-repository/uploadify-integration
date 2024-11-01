<?php
class Uploadify_View
{
	public $helpers;

    public function load( $file, $data = array() )
    {
		$this->data = $data;
        $file = UPLOADIFY_DIR . 'views/scripts/' . $file;
		
        if( ! file_exists( $file ) ) {
            throw new Exception( "View '$file' was not found" );
        }

		ob_start();
        extract($data);
        include($file);
		return ob_get_clean();
    }
	
	public function __call( $name, $arguments )
	{
		$class = sprintf( 'Uploadify_View_Helper_%s', ucfirst( $name ) );
		$object = new $class( $this, $this->data );
		$this->helpers[$name] = true;
		return $object->$name( $arguments );
		
		// Load the helper
		if ( empty( $this->helpers[$name] ) ) {
			$class = sprintf( 'Uploadify_View_Helper_%s', ucfirst( $name ) );
			$this->helpers[$name] = new $class( $this, $this->data );
		}
		return $this->helpers[$name]->$name( $arguments );
	}
}
?>
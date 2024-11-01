<?php
class Uploadify_View_Helper_Checkbox extends Uploadify_View_Helper
{

	public function checkbox( $args )
	{
		$name = $args[0];
		$value = $args[1];
		
		return sprintf( '<input type="checkbox" name="%s" value="1" %s/>',
			$name,
			$this->getChecked( $value )
		);
	}
	
	private function getChecked( $value ) {
		if ( ( ( int ) $value ) == 1 ) return 'checked="checked"';
	}
}
?>
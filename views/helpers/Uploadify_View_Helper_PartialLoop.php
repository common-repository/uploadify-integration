<?php
class Uploadify_View_Helper_PartialLoop extends Uploadify_View_Helper
{
	public function partialLoop( $args )
	{	
		$partial = $args[0];
		$model = $args[1];
		
		while( $single = array_shift( $model ) ) {
			$this->view->partial( $partial, $single );
		}
	}
	
}
?>
<?php
class Uploadify_View_Helper_Partial extends Uploadify_View_Helper
{
	
	public function partial( $args ) {
		echo $this->view->load( 'partials/' . $args[0], $args[1] );
	}
	
}
?>
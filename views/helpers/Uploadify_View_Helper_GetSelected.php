<?php
class Uploadify_View_Helper_GetSelected extends Uploadify_View_Helper
{
	public function getSelected( $args ) {
		if ( $args[0] === $args[1] ) return 'selected="selected"';
	}
}
?>
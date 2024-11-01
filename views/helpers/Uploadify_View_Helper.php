<?php
class Uploadify_View_Helper
{
	protected $view;
	protected $data;

	public function __construct( $view, $data )
	{
		$this->view = $view;		
		$this->data = $data;
	}

}
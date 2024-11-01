<?php
class Uploadify_View_Helper_UploadedFiles extends Uploadify_View_Helper
{
	public function uploadedFiles()
	{
		extract( $this->data );
		
		$temp = array();
		$file_ids = $metahandler->getMeta( $inputname );
		
		while( $file_id = array_shift( $file_ids ) ) {
			$file = get_post( $file_id );	
			$temp[] = array(
				'fileid' => $file->ID,
				'inputname' => $inputname
			);
		}
		return $temp;
	}
}
?>
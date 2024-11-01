<?php
function uploadify_get_files( $meta_type, $object_id, $meta_key )
{
	if ( ! ( $metahandler = Uploadify_Model_FileMeta_Abstract::createHandler( $meta_type ) ) ) return;
	
	$metadata = $metahandler->getMeta( $meta_key, $object_id );

	$temp = array();
	while( $file_id = array_shift( $metadata ) ) {
		$temp[] = array(
			'path' => Uploadify_Model_Posttype_File::getFilePath( $file_id ),
			'url' => Uploadify_Model_Posttype_File::getFileUrl( $file_id )
		);
	}

	return $temp;
}

?>

<?php
class Uploadify_View_Helper_FileSizeLimitOptions extends Uploadify_View_Helper
{

	public function fileSizeLimitOptions()
	{
		$temp = array();
		if ( $max = Uploadify_Model_Settings::getUploadMaxFilesizeInt() ) {
			$temp[] = '<option value="0">No Limit</option>';
			$options = get_option( Uploadify_Model_Settings::NAME_OPTION );
			$current = (int) $options[Uploadify_Model_Settings::KEY_DEFAULT_FILE_SIZE_LIMIT];
			$i = 1;
			while( $i <= $max ) {
				$temp[] = sprintf( '<option %s value="%d">%dM</option>', 
					$this->view->getSelected( $i, $current ), $i, $i 
				);
				++$i;
			}
		}
		return implode( $temp );
	}

}	
?>
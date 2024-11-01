<div id="uploadify-<?php echo $inputname ?>-wrapper">
	<input id="uploadify-<?php echo $inputname ?>" class="uploadify" type="file"/>
	<input type="hidden" class="buttonText" value="<?php echo $buttontext ?>"/>
	<input type="hidden" class="fileTypeExts" value="<?php echo $filetypeexts ?>"/>
	<input type="hidden" class="fileTypeDesc" value="<?php echo $filetypedesc ?>"/>
	<input type="hidden" class="fileSizeLimit" value="<?php echo $filesizelimit ?>"/>
	<input type="hidden" class="inputName" value="<?php echo $inputname ?>"/>
	<input type="hidden" class="uploadMode" value="<?php echo $uploadmode ?>"/>
	<input type="hidden" class="metaType" value="<?php echo $metatype ?>"/>
	<input type="hidden" class="parentId" value="<?php echo $parentid ?>"/>
	<input type="hidden" class="path" value="<?php echo $path ?>" />
	<input type="hidden" class="url" value="<?php echo $url ?>" />
	<div class="uploadify-files-wrapper">
		<?php
		$this->partialLoop( 'file.php', $this->uploadedFiles() ); 
		?>
	</div>
</div>

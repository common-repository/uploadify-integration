=== Uploadify Integration ===
Contributors: Mike Allen
Website: http://anchorwave.com/
Tags: shortcode, upload, uploader, uploading, uploadify, flash uploader, file uploader, image, images, posts, post, plugin
Requires at least: 3.0
Tested up to: 3.2.1
Stable tag: 0.9.7

Uploadify Integartion allows you to insert a jQuery uploadify uploader into your forms.

== Description ==

Uploadify Integration is an attempt to ease the very common task of including an upload field within a custom post type, options page, or user profile page.

= Features =

* Uses jQuery Uploadify
* Automatically saves to post meta, user meta, an option, or temporary depending on the metaType selected by the shortcode.
* Allows more than one shortcode per page.

= Intended Audience =

Uploadify Integration is intended to be a tool for developers needing to include an uploader within a form.  Because uploaded files can only be retrieved through code, this plugin may not be useful to anyone without knowledge of Wordpress Themes and PHP

= Important Notes =

Please check out the `Installation` and `Other Notes` tabs to see important details on how to use Uploadify Integration.  You will not be able to use this plugin without reading those pages.

= Feedback =

Please let me know how you would like this plugin to be improved by email: mikeleonardallen@gmail.com

== Installation ==

1. Download and unpack plugin files to **/wp-content/plugins/uploadify-integration/**
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Go to the *Options/Uploadify Integration* page in *Site Admin* and change the plugins options as you wish.
4. Place the `[uploadify]` shortcode in your content.

= Usage =

Embed the `[uploadify]` shortcode to include the uploader in a page or post.

= Options =

* **inputName** : The key that will be used to save the meta data.  Defualt = 'files'
* **metaType** : What to associate the uploaded files with.  Available options are `post`, `user`, `option`, and `temporary`. Default = `post`
* **uploadMode** : Allow multiple uploads or replace the previous upload.  Available options are `multiple` and `single`.  Setting this option to `multiple` will also enable the Uplodify multi setting. Default = `single`
* **fileSizeLimit** : Restriction on allowed file size in MB.
* **fileTypeExts** : Restrict allowed file types.  Default is `*.*`
* **fileTypeDesc** : Used in conjunction with `fileTypeExts` to tell the user what types of files should be uploaded.
* **buttonText** : Text to display on upload button.  Default is `Upload File`
* **path** : Path to save files.  If a path is provided, then a url for that path should also be provided if you intend to access files through a URL.
* **url** : Url to modified file path.

= Retrieving Files =

Files are stored as post meta, user meta, or option meta stored under the inputName specified with the shortcode.  For example, with the shortcode:

`[uploadify inputName="images" fileTypeExts="*.jpg;*.png;*.gif;" fileTypeDesc="Image Files" metaType="post"]`


The files are retrieved like so:

	$images = uploadify_get_files( 'post', get_the_ID(), 'images' );

Then to display them in your theme:

	while( $image = array_shift( $images ) ) {
		echo sprintf( '<img src="%s"/>', $image['url'] );
	}


== Frequently Asked Questions ==

= How can I send a notification email when an upload completes? =

Use the `uploadiy_file_upload` action

	add_action( 'uploadify_file_upload', 'my_upload_notification', 10, 3 );
	function my_upload_notification( $file, $file_id, $meta_handler ) {
		wp_mail(
			// TODO: supply arguments
		);
	}

= How can I modify the uploaded file before saving to meta data? =

Use the `uploadify_handle_upload` filter

	add_filter( 'uploadify_handle_upload', 'my_handle_upload' );
	function my_handle_upload( $file ) {
		// TODO: do something to modify the file.
		return $file;
	}

= How can I change the uplaod path? =

Use the shortcode path attribute

	[uploadify path='Upload path here' url='Remember to give a URL if you change the path']


== Screenshots ==
1. Settings Page
2. Uploadify Integration used within a page.


== Changelog ==

= 0.9.6 (September 29 2012) =
* Security Update: Removed XSS Vulnerablity in view files.

= 0.9.5 (January 29 2012) =
* Added support for specifying an upload path and url
* Added thumbnail view for uploaded images
* Added `temporary` metaType for generic use.
* Added uploadify_file_upload action for sending notifications upon a file upload.
* Added error handling for when a user uploads an insecure file type, or when a user does not have permission to upload a file
* Added uploadify_handle_upload filter for overriding a file before saving to meta data
* Added the uploadify_get_files for easier retrieval of files.
* Fixed uploader not applying with guest users.

= 0.9.4 (September 19 2011) =
* Added support for organizing uploads into month and year based folders.

= 0.9.3 (September 18 2011) =
* Provided the Uploadify multi setting when uploadMode is set to multiple.
* Added the uploadify_get_file_view filter to allow users to override the default view used to display uploaded files.
* Now using spl_autoload_register to include plugin files.
* Removed Taxonomy associated with file meta type.  Did not serve a purpose.
* Removed shortcode generator in favor documenting options to allow for less maintanance with future options.
* Removed file size limit description in settings page in favor of an external article providing more thourough examples.

= 0.9.2 (September 9 2011) =
* Included saving the upload path, so that you may change the upload path without breaking the links to previously uploaded files.
* By default scripts will now be included in all pages.  There is an option in the settings page to turn this off.
* Added screenshots.

= 0.9.1 (September 2 2011) =
* Fixed incorrect paths and urls.  Removed hard coded urls from the JavaScript.  Replaced AwTemplate with correct version of this class.

= 0.9 (August 28 2011) =
* Beta release.

== Upgrade Notice ==

= 0.9.4 =
Version 0.9.4 adds support for month and year based folder organization.

= 0.9.1 =
Version 0.9.1 fixes several bugs that prevented Uploadify Integration from working correctly.

<?php
/*
Plugin Name: Uploadify Integration
Plugin URI: http://mikeleonardallen.com/
Author: Mike Allen
Author URI: http://mikeleonardallen.com/
Description: Wrapper to integrate Uploadify within wordpress.  This plugin is an attempt to ease the very common task of including an upload field within a custom post type, options page, or user profile page.  Automatically saves to post meta, user meta, or as an option depending on the metaType selected by the shortcode. 
Version: 0.9.7

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

Mike Allen respectfully requests that any modifications made to this software
that would benefit the general population be submitted to mikeleonardallen@gmail.com
for inclusion in subsequent versions.
*/

define( 'UPLOADIFY_DIR', dirname( __FILE__ ) . '/' );
define( 'UPLOADIFY_URL', plugins_url( null, __FILE__ ) . '/' );

$url = parse_url( UPLOADIFY_URL );
define( 'UPLOADIFY_RELATIVE_URL', $url['path'] );

require_once( UPLOADIFY_DIR . 'Uploadify_Filter.php' );
require_once( UPLOADIFY_DIR . 'Uploadify_Action.php' );
require_once( UPLOADIFY_DIR . 'Uploadify_AutoLoad.php' );
require_once( UPLOADIFY_DIR . 'Uploadify_View.php' );
require_once( UPLOADIFY_DIR . 'uploadify-functions.php' );

register_activation_hook( __FILE__, 'Uploadify_Model_Settings::setInitialOptions' );

add_action( 'init', 'Uploadify_Model_Posttype_File::registerType' );

add_action( 'admin_menu', 'Uploadify_Controller_Settings::addAdminMenu' );
add_action( 'admin_init', 'Uploadify_Model_Settings::registerSettings' );

add_action( 'wp', 'Uploadify_Model_Shortcode::enqueueScripts' );

add_shortcode( 'uploadify', 'Uploadify_Controller_Shortcode::indexAction' );
add_action( 'admin_notices', 'Uploadify_Controller_Notices::indexAction' );

add_action( 'wp_ajax_nopriv_remove_uploadify_file', 'Uploadify_Controller_File::removeAction' );
add_action( 'wp_ajax_remove_uploadify_file', 'Uploadify_Controller_File::removeAction' );
add_action( 'wp_ajax_uploadify_upload', 'Uploadify_Controller_File::uploadAction' );
add_action( 'wp_ajax_nopriv_uploadify_upload', 'Uploadify_Controller_File::uploadAction' );

add_filter( 'upload_dir', 'Uploadify_Model_Posttype_File::uploadDirFilter' );
add_filter( 'wp_handle_upload', 'Uploadify_Model_Posttype_File::wpHandleUploadFilter', 5, 2 );

add_filter( Uploadify_Filter::PRE_SHORTCODE, 'Uploadify_Model_FileMeta_Temporary::clear', 5, 2 );
add_filter( Uploadify_Filter::GET_FILE_VIEW, 'Uploadify_Model_Posttype_File::getFileView', 5, 2 );
add_filter( Uploadify_Filter::GET_META_HANDLER, 'Uploadify_Model_FileMeta_Post::getHandler', 5, 3 );
add_filter( Uploadify_Filter::GET_META_HANDLER, 'Uploadify_Model_FileMeta_User::getHandler', 5, 3 );
add_filter( Uploadify_Filter::GET_META_HANDLER, 'Uploadify_Model_FileMeta_Option::getHandler', 5, 3 );
add_filter( Uploadify_Filter::GET_META_HANDLER, 'Uploadify_Model_FileMeta_Temporary::getHandler', 5, 3 );
add_filter( Uploadify_Filter::GET_MODE_HANDLER, 'Uploadify_Model_UploadMode_Single::getHandler', 5, 3 );
add_filter( Uploadify_Filter::GET_MODE_HANDLER, 'Uploadify_Model_UploadMode_Multiple::getHandler', 5, 3 );

?>

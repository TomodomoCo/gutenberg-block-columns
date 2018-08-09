<?php
/**
 * Plugin Name: Tomodomo › Gutenberg › Columns Block
 * Plugin URI: https://tomodomo.co
 * Description: Custom variable-width column block for Gutenberg
 * Author: Tomodomo
 * Author URI: https://tomodomo.co
 * Version: 3.0.0
 * Text Domain: tomodomo-block-column
 * Requires at least: 4.9.8
 * Require PHP: 7.0
 * License: MIT
 */

// If this file is called directly, abort
if (!defined('WPINC')) {
	die;
}

// Plugin folder path
if (!defined('TOMODOMO_BLOCK_COLUMN_PLUGIN_DIR')) {
	define('TOMODOMO_BLOCK_COLUMN_PLUGIN_DIR', plugin_dir_path(__FILE__));
}

// Plugin folder URL
if (!defined('TOMODOMO_BLOCK_COLUMN_PLUGIN_URL')) {
	define('TOMODOMO_BLOCK_COLUMN_PLUGIN_URL', plugin_dir_url(__FILE__));
}

// Load up the plugin
if (!class_exists('\Tomodomo\Gutenberg\Block\Columns')) {
	require 'lib/Columns.php';

	$columns = new \Tomodomo\Gutenberg\Block\Columns();
	$columns->init();
}

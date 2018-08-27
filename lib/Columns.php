<?php

namespace Tomodomo\Gutenberg\Block;

class Columns
{

	/**
	 * Initialise the plugin
	 *
	 * @return void
	 */
	public function init() {
		$this->registerHooks();

		return;
	}

	/**
	 * Register hooks
	 *
	 * @return void
	 */
	private function registerHooks()
	{
		add_action('init', [$this, 'register']);

		return;
	}

	/**
	 * Registers block (scripts/style)
	 *
	 * @since  1.0.0
	 * @access public
	 *
	 * @return void
	 */
	public function register()
	{
		// Make sure Gutenberg is loaded
		if (!function_exists('register_block_type')) {
			return;
		}

		$block_js   = 'build/script.js';
		$block_css  = 'build/style.css';
		$editor_css = 'build/editor.css';

		// Block JS
		wp_register_script(
			'tomodomo-block-column-js-editor',
			TOMODOMO_BLOCK_COLUMN_PLUGIN_URL . $block_js,
			[
				'wp-i18n',
				'wp-blocks',
				'wp-element',
			],
			filemtime(TOMODOMO_BLOCK_COLUMN_PLUGIN_DIR . $block_js)
		);

		// Global style
		wp_register_style(
			'tomodomo-block-column-css-main',
			TOMODOMO_BLOCK_COLUMN_PLUGIN_URL . $block_css,
			[],
			filemtime(TOMODOMO_BLOCK_COLUMN_PLUGIN_DIR . $block_css)
		);

		// Editor style
		wp_register_style(
			'tomodomo-block-column-css-editor',
			TOMODOMO_BLOCK_COLUMN_PLUGIN_URL . $editor_css,
			[],
			filemtime( TOMODOMO_BLOCK_COLUMN_PLUGIN_DIR . $editor_css )
		);

		// Register the block
		register_block_type('tomodomoco/tomodomocolumn', [
			'style'         => 'tomodomo-block-column-css-main',
			'editor_style'  => 'tomodomo-block-column-css-editor',
			'editor_script' => 'tomodomo-block-column-js-editor',
		]);

		return;
	}
}

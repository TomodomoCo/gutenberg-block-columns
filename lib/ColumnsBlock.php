<?php

namespace Tomodomo\Gutenberg\Block;

use Tomodomo\WpAssetRegistrar\Registrar;

class ColumnsBlock
{
	/**
	 * Initialise the plugin
	 *
	 * @return void
	 */
	public function init()
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

        // Handle asset enqueues
        $args = [
            'basePath' => trailingslashit(dirname(__DIR__)) . 'build/',
            'urlPath'  => trailingslashit(plugins_url('build', __DIR__)),
        ];

        $registrar = new Registrar($args);

        // Enqueue editor JS
        $registrar->addScript('tomodomo-block-columns-js', 'script.js', [
            'dependencies' => [
                'wp-i18n',
                'wp-blocks',
                'wp-element',
            ],
        ]);

        // Enqueue editor CSS
        $registrar->addStyle('tomodomo-block-columns-css', 'editor.css');

		// Register the block
		register_block_type('tomodomo/columns', [
			'editor_style'  => 'tomodomo-block-columns-css',
			'editor_script' => 'tomodomo-block-columns-js',
		]);

		return;
	}
}

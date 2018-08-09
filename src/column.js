/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import { InnerBlocks } from '@wordpress/editor'

/**
 * Internal dependencies
 */
import './style/style.scss'
import './style/editor.scss'

/**
 * Register block
 */
registerBlockType('tomodomo/column', {
  title: __('Column'),
  parent: ['tomodomo/columns'],
  icon: 'columns',
  description: __('A single column within a columns block.'),
  category: 'common',
  attributes: {
    columnWidth: {
      type: 'string',
    },
  },
  getEditWrapperProps( attributes ) {
    var wrapperAttributes = {
      'data-column-class': attributes.className,
      'data-column-width': attributes.columnWidth,
    }

    return wrapperAttributes
  },
  edit({ className }) {
    return (
      <div>
        <InnerBlocks templateLock={false} />
      </div>
    )
  },
  save() {
    return (
      <div>
        <InnerBlocks.Content />
      </div>
    )
  }
})

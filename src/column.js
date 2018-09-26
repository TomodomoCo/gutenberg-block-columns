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

var settings = {
  title: __('Column'),
  parent: [
    'tomodomo/columns'
  ],
  icon: 'columns',
  description: __('A single wrapper column within a columns block.'),
  category: 'common',
  support: {
    inserter: false,
  },
  attributes: {
    columnWidth: {
      type: 'string',
    },
  },
  getEditWrapperProps (attributes) {
    var wrapperAttributes = {
      'data-column-class': attributes.className,
      'data-column-width': attributes.columnWidth,
    }

    return wrapperAttributes
  },
  edit ({ className }) {
    return (
      <InnerBlocks templateLock={false} />
    )
  },
  save () {
    return (
      <div>
        <InnerBlocks.Content />
      </div>
    )
  },
  transform: [{
    type: 'block',
    blocks: ['tomodomoco/column'],
    transform: (content) => {
      return createBlock('tomodomo/column', {
        content,
      })
    },
  }],
}

/**
 * Register block
 */
registerBlockType('tomodomo/column', settings)

/**
 * Register deprecated block
 */
settings.parent = ['tomodomoco/columns']
delete settings.transform
registerBlockType('tomodomoco/column', settings)

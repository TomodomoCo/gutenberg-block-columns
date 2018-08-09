/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'

/**
 * Internal Dependencies
 */
import Editor from './block/editor'
import Renderer from './block/renderer'
import './style/style.scss'
import './style/editor.scss'

/**
 * Register Block
 */
registerBlockType('tomodomo/columns', {
  title: __('Columns'),
  description: __(
    'This is a block to allowing you to create simple custom column layouts.'
  ),
  keyword: [__('column'), __('grid'), __('tomodomo')],
  icon: {
    background: '#963f69',
    foreground: '#FFFFFF',
    src: 'columns'
  },
  category: 'layout',
  attributes: {
    columns: {
      type: 'array',
      default: []
    },
    backgroundColor: {
      type: 'string',
      default: '',
    },
    textColor: {
      type: 'string',
      default: '',
    },
  },
  edit: Editor,
  save: Renderer,
  supports: {
    align: ['wide', 'full'],
    customClassName: false,
  }
})

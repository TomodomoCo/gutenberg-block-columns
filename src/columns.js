/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import { cloneDeep } from 'lodash'

/**
 * Internal dependencies
 */
import Editor from './block/editor'
import Renderer from './block/renderer'
import './style/style.scss'
import './style/editor.scss'

let settings = {
  title: __('Columns'),
  description: __(
    'This is a block to allowing you to create simple custom column layouts.'
  ),
  keyword: [
    __('column'),
    __('grid'),
    __('tomodomo'),
  ],
  icon: {
    background: '#963f69',
    foreground: '#FFFFFF',
    src: 'columns',
  },
  category: 'layout',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: '',
    },
    columns: {
      type: 'array',
      default: [],
    },
    textColor: {
      type: 'string',
      default: '',
    },
  },
  edit: Editor,
  save: Renderer,
  supports: {
    align: [
      'wide',
      'full',
    ],
    customClassName: false,
    inserter: true,
  },
  transform: [{
    type: 'block',
    blocks: ['tomodomoco/columns'],
    transform: (content) => {
      return createBlock('tomodomo/columns', {
        content,
      })
    },
  }],
}

/**
 * Register block
 */
registerBlockType('tomodomo/columns', settings)

/**
 * Register deprecated block
 */
let deprecatedSettings = cloneDeep(settings)
delete deprecatedSettings.transform
deprecatedSettings.supports.inserter = false
registerBlockType('tomodomoco/columns', deprecatedSettings)

/**
 * External dependencies
 */
import classnames from 'classnames'
import { filter, sum } from 'lodash'

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n'
import { Placeholder } from '@wordpress/components'
import {
  dispatch,
  select,
} from '@wordpress/data'
import {
  InnerBlocks,
  getBlocks,
  withColors,
  getColorClass,
} from '@wordpress/editor'
import { Fragment } from '@wordpress/element'

/**
 * Internal Dependencies
 */
import Inspector from '../block/inspector'

/**
 * Block edit component
 */
const Editor = withColors('backgroundColor', 'textColor') ((props) => {
  // Variables
  const {
    className,
    attributes: {
      columns,
      backgroundColor,
      textColor,
    },
  } = props

  const classes = classnames(
    className,
    `has-${columns.length}-columns`,
    getColorClass('background', backgroundColor),
    getColorClass('text', textColor),
  )

  // UI for columns without any columns
  if (columns.length === 0 && sum(columns) < 1) {
    return (
      <Fragment>
        <Inspector {...{ ...props }} />
        <Placeholder
          key='tomdomoco-columns__placeholder'
          icon='columns'
          label={__('Columns')}
          instructions={__('Add columns to create layout')}
        />
      </Fragment>
    )
  }

  // UI for columns with layout
  return (
    <Fragment>
      <Inspector {...{ ...props }} />
      <div className={classes}>
        <InnerBlocks
          allowedBlocks={['tomodomo/column']}
          templateLock='all'
        />
      </div>
    </Fragment>
  )
})

export default Editor

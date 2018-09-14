/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import {
  InnerBlocks,
  getColorClassName,
} from '@wordpress/editor'

/**
 * Block render component
 */
const Renderer = (props) => {
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
    'grid',
    `has-${columns.length}-columns`,
    getColorClassName('background', backgroundColor),
    getColorClassName('text', textColor),
  )

  // UI
  return (
    <div className={classes}>
      <InnerBlocks.Content />
    </div>
  )
}

export default Renderer

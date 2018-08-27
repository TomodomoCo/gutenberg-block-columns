/**
 * External dependencies
 */
import classnames from 'classnames'

/**
 * WordPress dependencies
 */
import {
  InnerBlocks,
  getColorClass,
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
    getColorClass('background', backgroundColor),
    getColorClass('text', textColor),
  )

  // UI
  return (
    <div className={classes}>
      <InnerBlocks.Content />
    </div>
  )
}

export default Renderer

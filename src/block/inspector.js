/**
 * External Dependencies
 */
import { filter } from 'lodash'

/**
 * WordPress Dependencies
 */
import { createBlock } from '@wordpress/blocks'
import {
  PanelBody,
  Button,
  IconButton,
  BaseControl,
  PanelRow,
  PanelColor,
} from '@wordpress/components'
import {
  dispatch,
  select,
} from '@wordpress/data'
import {
  ColorPalette,
  InspectorControls,
} from '@wordpress/editor'
import { Fragment } from '@wordpress/element'
import { __ } from '@wordpress/i18n'

/**
 * Internal Dependencies
 */
import canAddColumns from '../utils/can-add-columns'
import getWidthClass from '../utils/get-width-class'
import isDisabled from '../utils/is-disabled'
import options from '../data/options'

/**
 *
 * @param {object} props component props
 * @returns {object} Component
 */
const Inspector = (props) => {
  const {
    attributes: {
      columns,
    },
    setAttributes,
    clientId,
    setBackgroundColor,
    backgroundColor,
    setTextColor,
    textColor,
  } = props

  // Add Column
  const onAddColumn = () => {
    const newColumn = 0

    const block = createBlock('tomodomo/column', {
      columnWidth: 0,
      className: '',
    })

    // insert the block
    dispatch('core/editor').insertBlock(block, columns.length, clientId)

    setAttributes({
      columns: columns.concat(newColumn),
    })
  }

  // Update Column
  const onChangeWidth = (event, colIndex) => {
    // Grab the current block
    var col = select('core/editor').getBlocksByClientId(clientId)[0].innerBlocks[colIndex]

    const updatedColumns = columns.map((column, index) => (
      index === colIndex ? Number(event.target.value) : column
    ))

    // Update the correct block's attributes
    dispatch('core/editor').updateBlockAttributes(col.clientId, {
      columnWidth: updatedColumns[colIndex],
      className:   getWidthClass(updatedColumns[colIndex]),
    })

    setAttributes({
      columns: updatedColumns,
    })
  }

  // Delete Column
  const onDeleteColumn = (colIndex) => {
    // Grab all the blocks
    var col = select('core/editor').getBlocksByClientId(clientId)[0].innerBlocks[colIndex]

    // Remove the nested block
    dispatch('core/editor').removeBlock(col.clientId, false)

    // Update the attributes in the parent
    const updatedColumns = filter(columns, (column, index) => (
      colIndex !== index
    ))

    setAttributes({
      columns: updatedColumns,
    })
  }

  // Inspector Controls
  return (
    <InspectorControls>
      <PanelBody title={__('Columns Settings')} initialOpen={true}>
        {columns.map((column, index) => (
          <Fragment key={`column-${index}-width`}>
            <div className='columns__column'>
              <BaseControl label={`Column ${index + 1}`}>
                <select
                  id={`columns-width-${index}`}
                  value={column}
                  className='components-select-control__input'
                  onChange={event => onChangeWidth(event, index)}
                >
                  {options.ColumnWidths.map((option, index) => (
                    <option
                      key={`${option.label}-${option.label}-${index}`}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </BaseControl>

              <Button
                onClick={() => onDeleteColumn(index)}
                className='columns__button--delete button-link-delete'
              >
                {__('Delete')}
              </Button>
            </div>
          </Fragment>
        ))}

        <IconButton
          icon='plus'
          className='button columns__button--add'
          onClick={onAddColumn}
          disabled={!canAddColumns(columns)}
        >
          {__('Add a Column')}
        </IconButton>
      </PanelBody>
      <PanelColor title={__('Background Color')} colorValue={backgroundColor.value} colorName={backgroundColor.name}>
        <ColorPalette onChange={setBackgroundColor} value={backgroundColor.value} />
      </PanelColor>
      <PanelColor title={__('Text Color')} colorValue={textColor.value} colorName={textColor.name}>
        <ColorPalette onChange={setTextColor} value={textColor.value} />
      </PanelColor>
    </InspectorControls>
  )
}

export default Inspector

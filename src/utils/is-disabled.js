/**
 * External Dependencies
 */
import { sum } from 'lodash'

/**
 * Internal Dependencies
 */
import options from '../data/options'

/**
 * Disable column with based on space avability
 *
 * @param {string} currentOption current select option
 * @param {array} columns columns array from attribute
 */
const isDisabled = (currentOption, columns) => {
  let isDisabled = false // Default for disabled
  const totalWidth = sum(columns) // Calculate colum width

  if (currentOption === 0 || columns.length === 1) return

  // Display width options based on first selected width
  switch (totalWidth) {
    case 0.25:
      isDisabled = !options.ColumnWidth25.includes(currentOption)
      break
    case 0.5:
      isDisabled = !options.ColumnWidth50.includes(currentOption)
      break
    case 0.75:
      isDisabled = !options.ColumnWidth75.includes(currentOption)
      break
    case 0.6666666666666666:
      isDisabled = !options.ColumnWidth66.includes(currentOption)
      break
    case 0.3333333333333333:
      isDisabled = !options.ColumnWidth33.includes(currentOption)
      break
    case 1:
      isDisabled = !columns.includes(currentOption)
      break
  }

  return isDisabled
}

export default isDisabled

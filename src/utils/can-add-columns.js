/**
 * External Dependencies
 */
import { sum } from 'lodash'

/**
 * Check if user can add more column(s)
 *
 * @param {array} columns array from attribute
 */
const canAddColumns = columns => {
  if (sum(columns) < 1) {
    if (columns.length < 4) {
      return true
    } else {
      return false
    }
  }
}

export default canAddColumns

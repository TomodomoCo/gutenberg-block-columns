/**
 * Get column width class based on width integer
 *
 * @param {integer} width column width
 */
const getWidthClass = width => {
  let widthClass
  switch (width) {
    case 0.25:
      widthClass = 'col-3_md-6_sm-12'
      break
    case 0.5:
      widthClass = 'col-6_md-12'
      break
    case 0.3333333333333333:
      widthClass = 'col-4_sm-12'
      break
    case 0.6666666666666666:
      widthClass = 'col-8_md-7_sm-12'
      break
    case 0.75:
      widthClass = 'col-9_md-8_sm-12'
      break
    case 1:
      widthClass = 'col-12'
      break

    default:
      widthClass = 'none'
      break
  }

  return widthClass
}

export default getWidthClass

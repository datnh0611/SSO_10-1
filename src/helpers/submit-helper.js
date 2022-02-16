import formatingHelper from './formatingHelper'

export const setSubmitData = (attrs, data) => {
  const submitData = {}
  for (const key in attrs) {
    switch (attrs[key].type) {
      case 'list': {
        // console.log('data[key] ok', data[key], !data[key] instanceof Object, typeof data[key])
        if (typeof data[key] === 'string') {
          submitData[attrs[key].key] = data[key].split() || attrs[key].defaultValue
          break
        }
        submitData[attrs[key].key] = data[key] || attrs[key].defaultValue
        break
      }
      case 'date': {
        /**
         * Input format supported:
         *  - String can parse to integer
         *  - String include '/' which have date format
         */
        if (data[key].includes('/')) {
          submitData[attrs[key].key] =
            formatingHelper.dateToTimestamp(data[key]) || attrs[key].defaultValue
          break
        }
        if (parseInt(data[key])) {
          submitData[attrs[key].key] =
            formatingHelper.strToTimestamp(data[key]) || attrs[key].defaultValue
          break
        }
        submitData[attrs[key].key] = attrs[key].defaultValue
        break
      }
      case 'number': {
        submitData[attrs[key].key] = parseInt(data[key]) || attrs[key].defaultValue
        break
      }
      default:
        if (data[key] === '') data[key] = null
        submitData[attrs[key].key] = data[key] || attrs[key].defaultValue
    }
  }
  return submitData
}

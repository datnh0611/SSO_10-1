import formatingHelper from './formatingHelper'

export const setSubmitData = (attrs, data) => {
  const submitData = {}
  for (const key in attrs) {
    switch (attrs[key].type) {
      // case 'string': {
      //   submitData[attrs[key].key] = data[key] || attrs[key].defaultValue
      //   break
      // }
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
        if (!data[key].includes('/')) {
          // Not have date format
          submitData[attrs[key].key] = attrs[key].defaultValue
          break
        }
        submitData[attrs[key].key] =
          formatingHelper.dateToTimestamp(data[key]) || attrs[key].defaultValue
        break
      }
      default:
        submitData[attrs[key].key] = data[key] || attrs[key].defaultValue
    }
  }
  return submitData
}

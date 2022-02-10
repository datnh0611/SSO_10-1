import moment from 'moment'

class Helper {
  constructor() {
    return
  }

  static generateId = () => {
    return Math.random().toString(36).substr(2, 5)
  }

  static currencyFormating = (str) => {
    let toCurrency
    try {
      toCurrency = parseInt(str).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    } catch (error) {
      return null
    }
    return toCurrency
  }

  /**
   * TIME HELPER
   */

  static getCurrentTimestamp = () => {
    return Math.floor(Date.now() / 1000)
  }

  static timestampToDate = (timestamp, format = 'DD/MM/YYYY', message = 'Không xác định') => {
    let date
    try {
      if (!timestamp || timestamp === 0) {
        return message
      }
      date = moment.unix(timestamp).format(format)
    } catch (error) {
      return message
    }
    return date
  }

  static dateToTimestamp = (date, format = 'DD/MM/YYYY', message = 'Không xác định') => {
    let timestamp
    try {
      timestamp = moment(date, format).unix()
    } catch (error) {
      return message
    }

    return timestamp
  }

  /**
   * DATA FORMATING
   */

  static dataFormatForGetMany = async (data) => {
    const formatedUsers = []

    for (let key in data) {
      const user = {
        id: key,
        ...data[key],
      }

      formatedUsers.push(user)
    }

    return formatedUsers
  }

  static dataFormatForGetSingle = async (id, data) => {
    return {
      id: id,
      ...data,
    }
  }

  static strToArray = (str, separator = ' ') => {
    // console.log('str', str)
    // return !str ? str : str.split(separator)
  }

  // static camelToSnakeCase = (str) => {
  //   return str
  //     ? str
  //         .split(/(?=[A-Z])/)
  //         .join('_')
  //         .toLowerCase()
  //     : null
  // }

  // static snakeToCamelCase = (str) => {
  //   return str
  //     ? str
  //         .split('_')
  //         .map((char) => char[0].toLowerCase())
  //         .join('')
  //     : ''
  // }
}

export default Helper

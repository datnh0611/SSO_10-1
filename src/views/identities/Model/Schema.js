import formatingHelper from '../../../helpers/formatingHelper'
export const initialObj = {
  idNumber: null,
  previousIDNumber: null,
  fullName: null,
  dateBirth: null,
  gender: null,
  address: null,
  district: null,
  dateRegister: null,
  province: null,
  ward: null,
  email: null,
  phoneNumber: null,
  userId: null,
  id: null,
}

export const keyList = [
  'idNumber',
  'previousIDNumber',
  'fullName',
  'dateBirth',
  'gender',
  'address',
  'dateRegister',
]

export const objAttrs = {
  idNumber: {
    key: 'id_number',
    type: 'string',
    defaultValue: null,
    disabled: false,
  },
  previousIDNumber: {
    key: 'previous_id_number',
    type: 'string',
    defaultValue: '',
    disabled: false,
  },
  fullName: {
    key: 'full_name',
    type: 'string',
    defaultValue: null,
    disabled: false,
  },
  dateBirth: {
    key: 'date_birth',
    type: 'date',
    defaultValue: null,
    disabled: false,
  },
  gender: {
    key: 'gender',
    type: 'number',
    defaultValue: 0,
    disabled: false,
  },
  address: {
    key: 'address',
    type: 'string',
    defaultValue: null,
    disabled: false,
  },
  district: {
    key: 'district',
    type: 'string',
    defaultValue: null,
    disabled: false,
  },
  dateRegister: {
    key: 'date_register',
    type: 'date',
    defaultValue: null,
    disabled: false,
  },
  province: {
    key: 'province',
    type: 'string',
    defaultValue: null,
    disabled: false,
  },
  ward: {
    key: 'ward',
    type: 'string',
    defaultValue: '',
    disabled: false,
  },
  email: {
    key: 'email',
    type: 'string',
    defaultValue: '',
    disabled: false,
  },
  phoneNumber: {
    key: 'phone_number',
    type: 'string',
    defaultValue: '',
    disabled: false,
  },
  userId: {
    key: 'user_id',
    type: 'string',
    defaultValue: '',
    disabled: false,
  },
  id: {
    key: 'id',
    type: 'string',
    defaultValue: null,
    disabled: false,
  },
}

export const handleData = (data) => {
  // console.log('data', data)
  // const clientMetadata = JSON.parse(data['_client_metadata'])
  const result = {}
  for (const key in objAttrs) {
    // get from data
    if (data.hasOwnProperty(objAttrs[key].key)) {
      switch (objAttrs[key].type) {
        case 'date': {
          if (typeof data[objAttrs[key].key] === 'number') {
            result[key] = formatingHelper.timestampToDate(data[objAttrs[key].key])
          }
          break
        }
        // case 'list': {
        //   break
        // }
        // case 'number': {
        //   break
        // }
        default:
          result[key] = data[objAttrs[key].key]
      }
    }
  }
  return result
}

// export const crudRequest = async (func, param = '', history, navigateTo) => {
//   await func(param)
//   history.push(navigateTo)
// }

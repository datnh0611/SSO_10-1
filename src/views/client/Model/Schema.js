import formatingHelper from '../../../helpers/formatingHelper'
export const clientObj = {
  clientId: '',
  clientName: '',
  clientUri: '',
  clientSecret: '',
  issuesAt: '',
  expiresAt: '',
  grantTypes: '',
  scope: '',
  redirectUris: '',
  responseTypes: '',
  tokenEndpointAuthMethod: '',
  id: '',
  userId: '',
}
export const clientAttrs = {
  clientId: {
    key: 'client_id',
    type: 'string',
    defaultValue: '',
    disabled: true,
  },
  clientName: {
    key: 'client_name',
    type: 'string',
    defaultValue: '',
    disabled: false,
  },
  clientUri: {
    key: 'client_uri',
    type: 'string',
    defaultValue: '',
    disabled: false,
  },
  clientSecret: {
    key: 'client_secret',
    type: 'string',
    defaultValue: '',
    disabled: true,
  },
  issuesAt: {
    key: 'client_id_issued_at',
    type: 'date',
    defaultValue: 0,
    disabled: true,
  },
  expiresAt: {
    key: 'client_secret_expires_at',
    type: 'date',
    defaultValue: 0,
    disabled: true,
  },
  grantTypes: {
    key: 'grant_types',
    type: 'list',
    defaultValue: [],
    disabled: false,
  },
  scope: {
    key: 'scope',
    type: 'string',
    defaultValue: 'basic',
    disabled: false,
  },
  redirectUris: {
    key: 'redirect_uris',
    type: 'list',
    defaultValue: [],
    disabled: false,
  },
  responseTypes: {
    key: 'response_types',
    type: 'list',
    defaultValue: ['code'],
    disabled: false,
  },
  tokenEndpointAuthMethod: {
    key: 'token_endpoint_auth_method',
    type: 'string',
    defaultValue: 'client_secret_basic',
    disabled: false,
  },
  id: {
    key: 'id',
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
}
export const grantTypesList = [
  { label: 'Authorization Code', value: 'authorization_code' },
  { label: 'Implicit', value: 'implicit' },
  { label: 'Resource Owner Password', value: 'password' },
  { label: 'Client Credential', value: 'client_credentials' },
]

export const responseTypeList = [
  { label: 'Code', value: 'code' },
  { label: 'Token', value: 'token' },
  { label: 'None', value: 'none' },
]

export const tokenEndpointAuthMethodList = [
  { value: 'client_secret_basic', label: 'Client Secret Basic' },
  { value: 'client_secret_post', label: 'Client Secret Post' },
  { value: 'none', label: 'None' },
]

export const handleData = (data) => {
  // console.log('data', data)
  const clientMetadata = JSON.parse(data['_client_metadata'])
  const result = {}
  for (const key in clientAttrs) {
    // get from data
    if (data.hasOwnProperty(clientAttrs[key].key)) {
      switch (clientAttrs[key].type) {
        case 'date': {
          result[key] = formatingHelper.timestampToDate(data[clientAttrs[key].key])
          break
        }
        // case 'list': {
        //   break
        // }
        // case 'number': {
        //   break
        // }
        default:
          result[key] = data[clientAttrs[key].key]
      }
    }
    // get from metaData
    if (clientMetadata.hasOwnProperty(clientAttrs[key].key)) {
      switch (clientAttrs[key].type) {
        // case 'date': {
        //   break
        // }
        case 'list': {
          if (!data[clientAttrs[key].key] instanceof Array) {
            result[key] = clientMetadata[clientAttrs[key].key].split()
            break
          }
          result[key] = clientMetadata[clientAttrs[key].key]
          break
        }
        // case 'number': {
        //   break
        // }
        default:
          result[key] = clientMetadata[clientAttrs[key].key]
      }
    }
  }
  return result
}

export const crudRequest = async (func, param = null, history, navigateTo) => {
  await func(param)
  history.push(navigateTo)
}

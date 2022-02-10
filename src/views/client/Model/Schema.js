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
    defaultValue: '',
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

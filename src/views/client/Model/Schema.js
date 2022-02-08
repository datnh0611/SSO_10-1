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
}
export const clientAttrs = {
  clientId: {
    key: 'client_id',
    type: 'string',
    disabled: true,
  },
  clientName: {
    key: 'client_name',
    type: 'string',
    disabled: false,
  },
  clientUri: {
    key: 'client_uri',
    type: 'string',
    disabled: false,
  },
  clientSecret: {
    key: 'client_secret',
    type: 'string',
    disabled: true,
  },
  issuesAt: {
    key: 'client_id_issued_at',
    type: 'date',
    disabled: true,
  },
  expiresAt: {
    key: 'client_secret_expires_at',
    type: 'date',
    disabled: true,
  },
  grantTypes: {
    key: 'grant_types',
    type: 'list',
    disabled: false,
  },
  scope: {
    key: 'scope',
    type: 'list',
    disabled: false,
  },
  redirectUris: {
    key: 'redirect_uris',
    type: 'list',
    disabled: false,
  },
  responseTypes: {
    key: 'response_types',
    type: 'list',
    disabled: false,
  },
  tokenEndpointAuthMethod: {
    key: 'token_endpoint_auth_method',
    type: 'string',
    defaultValue: 'client_secret_basic',
    disabled: false,
  },
}
export const grantTypesList = [
  { name: 'Authorization Code', value: 'authorization_code' },
  { name: 'Implicit', value: 'implicit' },
  { name: 'Resource Owner Password', value: 'password' },
  { name: 'Client Credential', value: 'client_credentials' },
]

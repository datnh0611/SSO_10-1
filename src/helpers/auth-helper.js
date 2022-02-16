import { reqHandler } from './http-helper'
import config from '../configs/config'

const { url, apiPrefix } = config

export const getCurrentUser = async (...reqProps) => {
  const [endpoint, query, token, csrfToken] = reqProps
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${endpoint}` + (query ? `?${new URLSearchParams(query)}` : ''),
    credentials: 'include',
    token: token || { 'X-CSRF-TOKEN': csrfToken },
    ...reqProps,
  })
  return resp
}

export const login = async (...reqProps) => {
  const [endpoint, data] = reqProps
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${endpoint}`,
    method: 'POST',
    body: data,
    credentials: 'include',
    // csrfToken,
  })
  return resp
}

import { reqHandler } from './http-helper'
import config from '../configs/config'

const { url, apiPrefix } = config

export const getCurrentUser = async (...reqProps) => {
  const [endpoint, query, csrfToken] = reqProps
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${endpoint}` + (query ? `?${new URLSearchParams(query)}` : ''),
    credentials: 'include',
    csrfToken,
  })
  return resp
}

export const login = async (...reqProps) => {
  const [endpoint, data, csrfToken] = reqProps
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${endpoint}`,
    method: 'POST',
    body: data,
    credentials: 'include',
    // csrfToken,
  })
  return resp
}

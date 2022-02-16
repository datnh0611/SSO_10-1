import { reqHandler } from './http-helper'
import config from '../configs/config'

const { url, apiPrefix } = config

export const authorizeRequest = async (...reqProps) => {
  const [endpoint, query] = reqProps
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${endpoint}` + (query ? `${query}` : ''),
    credentials: 'include',
    ...reqProps
  })
  return resp
}

import { reqHandler } from './http-helper'
import config from '../configs/config'

const { url, apiPrefix } = config

// export const getMany = async (endpoint, query = null) => {
export const getMany = async (...reqProps) => {
  const [endpoint, query] = reqProps
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${endpoint}` + (query ? `?${new URLSearchParams(query)}` : ''),
    credentials: 'include',
  })
  return resp
}

export const getSingle = async (...reqProps) => {
  const [endpoint, id] = reqProps
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${endpoint}/${id}`,
    credentials: 'include',
  })
  return resp
}

export const post = async (...reqProps) => {
  const [endpoint, data] = reqProps
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${endpoint}`,
    method: 'POST',
    body: data,
    credentials: 'include',
  })
  return resp
}

export const putSingle = async (...reqProps) => {
  const [endpoint, id, data] = reqProps
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${endpoint}/${id}`,
    method: 'PUT',
    body: data,
    credentials: 'include',
  })
  return resp
}

export const deleteSingle = async (...reqProps) => {
  const [endpoint, id] = reqProps
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${endpoint}/${id}`,
    method: 'DELETE',
    credentials: 'include',
  })
  return resp
}

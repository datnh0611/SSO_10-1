import { reqHandler } from './http-helper'
import config from '../configs/config'

const { url, apiPrefix } = config

export const getMany = (endpoint, param = null) => {
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${endpoint}` + (param ? `?${new URLSearchParams(param)}` : ''),
    credentials: 'include',
  })
  return resp
}

export const getSingle = (endpoint, id) => {
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${endpoint}/${id}`,
    credentials: 'include',
  })
  return resp
}

export const post = (endpoint, data) => {
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${endpoint}`,
    method: 'POST',
    body: data,
    credentials: 'include',
  })
  return resp
}

export const putSingle = (endpoint, id, data) => {
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${endpoint}/${id}`,
    method: 'PUT',
    body: data,
    credentials: 'include',
  })
  return resp
}

export const deleteSingle = (endpoint, id) => {
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${endpoint}/${id}`,
    method: 'DELETE',
    credentials: 'include',
  })
  return resp
}

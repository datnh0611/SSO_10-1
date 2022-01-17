import { reqHandler } from './http-helper'
import config from '../configs/config'

const { url, apiPrefix } = config

const checkProperties = (instance, keys) => {
  for (const key of keys) {
    if (!instance.hasOwnProperty(key)) {
      return null
    }
  }
  return true
}
// export const getMany = async (endpoint, param = null) => {
export const getMany = async (reqProps) => {
  if (!checkProperties(reqProps, ['endpoint', 'param'])) {
    throw new Error('Chưa đủ đối số phù hợp!')
  }
  // if (reqProps.hasOwnProperty())
  const resp = await reqHandler({
    url:
      `${url}/${apiPrefix}/${reqProps.endpoint}` +
      (reqProps.param ? `?${new URLSearchParams(reqProps.param)}` : ''),
    credentials: 'include',
  })
  return resp
}

export const getSingle = async (reqProps) => {
  if (!checkProperties(reqProps, ['endpoint', 'id'])) {
    console.log('not have properties')
    throw new Error('Chưa đủ đối số phù hợp!')
  }
  console.log('reqProps', reqProps, `${url}/${apiPrefix}/${reqProps.endpoint}/${reqProps.id}`)
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${reqProps.endpoint}/${reqProps.id}`,
    credentials: 'include',
  })
  return resp
}

export const post = async (reqProps) => {
  if (!checkProperties(reqProps, ['endpoint', 'data'])) {
    throw new Error('Chưa đủ đối số phù hợp!')
  }
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${reqProps.endpoint}`,
    method: 'POST',
    body: reqProps.data,
    credentials: 'include',
  })
  return resp
}

export const putSingle = async (reqProps) => {
  if (!checkProperties(reqProps, ['endpoint', 'id', 'data'])) {
    throw new Error('Chưa đủ đối số phù hợp!')
  }

  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${reqProps.endpoint}/${reqProps.id}`,
    method: 'PUT',
    body: reqProps.data,
    credentials: 'include',
  })
  return resp
}

export const deleteSingle = async (reqProps) => {
  if (!checkProperties(reqProps, ['endpoint', 'id'])) {
    throw new Error('Chưa đủ đối số phù hợp!')
  }
  const resp = await reqHandler({
    url: `${url}/${apiPrefix}/${reqProps.endpoint}/${reqProps.id}`,
    method: 'DELETE',
    credentials: 'include',
  })
  return resp
}

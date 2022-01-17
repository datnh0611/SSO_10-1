import { useReducer, useCallback } from 'react'

const initialState = {
  status: 'pending',
  data: null,
  error: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        status: 'success',
        data: action.resp,
        error: null,
      }
    case 'FAILED':
      return {
        status: 'failed',
        data: action.resp,
        error: action.error,
      }
    default:
      return {
        status: 'pending',
        data: null,
        error: null,
      }
  }
}

const useHttp = (reqFunc) => {
  const [http, dispatchHttp] = useReducer(reducer, initialState)

  const req = useCallback(async (reqData) => {
    console.log('reqData', reqData)
    try {
      const resp = await reqFunc(reqData)
      dispatchHttp({ type: 'SUCCESS', resp: resp })
    } catch (error) {
      dispatchHttp({
        type: 'FAILED',
        error: error.error_message || error || 'Có lỗi xảy ra! Vui lòng thử lại sau!',
      })
    }
  }, [])

  return {
    ...http,
    req,
  }
}

export default useHttp

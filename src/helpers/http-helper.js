export const reqHandler = async (reqConfig) => {
  const request = await fetch(reqConfig.url, {
    method: reqConfig.method || 'GET',
    headers: reqConfig.header || {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      // "token": reqConfig.token ? reqConfig.token : null
    },
    credentials: reqConfig.credentials ? reqConfig.credentials : 'same-origin',
    mode: reqConfig.mode ? reqConfig.mode : 'cors',
    body: reqConfig.body ? JSON.stringify(reqConfig.body) : null,
    referrerPolicy: reqConfig.referrerPolicy
      ? reqConfig.referrerPolicy
      : 'strict-origin-when-cross-origin',
  })

  const data = await request.json()
  if (!request.ok) {
    throw new Error(data.error_message || 'Có lỗi xảy ra. Vui lòng thử lại sau!')
  }
  return data
}

export const reqHandler = async (reqConfig) => {
  console.log('reqConfig', reqConfig)
  const request = await fetch(reqConfig.url, {
    method: reqConfig.method || 'GET',
    headers: reqConfig.header || {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': reqConfig.csrfToken,
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

export const reqHandler = async (reqConfig) => {
  const resp = await fetch(reqConfig.url, {
    method: reqConfig.method || 'GET',
    headers: reqConfig.headers || {
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Credentials': 'true',
      // 'X-CSRF-TOKEN': reqConfig.csrfToken ? reqConfig.csrfToken : null,
      ...reqConfig.token,
    },
    credentials: reqConfig.credentials ? reqConfig.credentials : 'include', // include, *same-origin, omit
    cache: reqConfig.cache ? reqConfig.cache : 'default',
    mode: reqConfig.mode ? reqConfig.mode : 'cors',
    json: reqConfig.json ? reqConfig.json : true,
    body:
      reqConfig.body && reqConfig.json !== false
        ? JSON.stringify(reqConfig.body)
        : reqConfig.body && reqConfig.json === false
        ? reqConfig.body
        : null,
    redirect: reqConfig.redirect ? reqConfig.redirect : 'follow',
    referrerPolicy: reqConfig.referrerPolicy
      ? reqConfig.referrerPolicy
      : 'strict-origin-when-cross-origin',
    // : 'origin-when-cross-origin', // strict-origin-when-cross-origin, origin-when-cross-origin
  })
  try {
    if (resp.redirected) {
      console.log('resp.url', resp.url)
      window.open(resp.url, '_blank')
      return
    }
    const data = await resp.json()
    if (!resp.ok) {
      throw new Error(data.error_message || 'Có lỗi xảy ra. Vui lòng thử lại sau!')
    }
    return data
  } catch (error) {
    throw new Error(error || 'Có lỗi xảy ra. Vui lòng thử lại sau!')
  }
}

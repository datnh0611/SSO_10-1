import { useState, useCallback } from 'react'

const useInput = (defaultVal = '', validateFunc = null) => {
  const [value, setValue] = useState(defaultVal)
  const onChange = useCallback((event) => {
    setValue(event.target.value)
  }, [])
  const fetchValue = useCallback((value) => {
    setValue(value || '')
  }, [])
  const reset = useCallback(() => {
    setValue('')
  }, [])
  return { value, onChange, reset, fetchValue }
}

export default useInput

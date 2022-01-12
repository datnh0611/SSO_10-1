import { useState } from 'react'

const useInput = (defaultVal = '', validateFunc = null) => {
  const [value, setValue] = useState(defaultVal)
  const onChange = (event) => {
    setValue(event.target.value)
  }
  const fetchValue = (value) => {
    setValue(value || '')
  }
  const reset = () => {
    setValue('')
  }
  return { value, onChange, reset, fetchValue }
}

export default useInput

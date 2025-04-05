import { useState } from 'react'

function useToggle() {
  const [value, setValue] = useState(true)

  function toggle() {
    setValue(!value)
  }

  return {
    value,
    toggle,
  }
}

export default useToggle

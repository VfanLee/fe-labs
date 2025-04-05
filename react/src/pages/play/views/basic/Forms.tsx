import { useState } from 'react'

function Forms() {
  const [text, setText] = useState('Hello world')

  function handleChange(e: any) {
    setText(e.target.value)
  }

  return (
    <>
      <p>{text}</p>
      <input value={text} onChange={handleChange} />
    </>
  )
}

export default Forms

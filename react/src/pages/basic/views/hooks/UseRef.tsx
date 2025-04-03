import { useRef } from 'react'

function Refs() {
  const input = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    console.log(input)
    input.current?.focus()
  }

  return (
    <>
      <input ref={input} />
      <button type="button" onClick={handleClick}>
        聚焦
      </button>
    </>
  )
}

export default Refs

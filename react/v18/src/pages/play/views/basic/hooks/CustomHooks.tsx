import useToggle from '@play/hooks/useToggle'

function CustomHooks() {
  const { value, toggle } = useToggle()

  return (
    <div>
      {value && <p>hello</p>}
      <button type="button" onClick={toggle}>
        Click
      </button>
    </div>
  )
}

export default CustomHooks

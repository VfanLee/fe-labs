function EventHandling() {
  const handleClick1 = () => {
    console.log('click')
  }

  const handleClick2 = (e: any) => {
    console.log(e)
  }

  const handleClick3 = (msg: string, e: any) => {
    console.log(msg, e)
  }

  return (
    <div>
      <button type="button" onClick={handleClick1}>
        Click1
      </button>

      <button type="button" onClick={handleClick2}>
        Click2
      </button>

      <button type="button" onClick={(e) => handleClick3('msg', e)}>
        Click3
      </button>
    </div>
  )
}

export default EventHandling

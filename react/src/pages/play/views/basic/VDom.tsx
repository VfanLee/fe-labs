import { createElement } from 'react'

function Vdom() {
  return createElement('h1', { id: 'title' }, 'hello react')
}

export default Vdom

import { Component } from 'react'
import Card from '@/pages/basic/components/CardClass'

interface State {
  count: number
}

// class ClassComp extends Component<{}, State> {
//   constructor(props: any) {
//     super(props)

//     this.state = { count: 0 }
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick() {
//     this.setState({ count: this.state.count + 1 })
//   }

//   render() {
//     const { count } = this.state
//     return (
//       <>
//         <p>类组件</p>
//         <h1>{count}</h1>
//         <button type="button" onClick={this.handleClick}>
//           count++
//         </button>
//       </>
//     )
//   }
// }

class ClassComp extends Component<{}, State> {
  state = { count: 0 }
  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    const { count } = this.state
    const c = { name: '小红', sex: '女', age: 17 }

    return (
      <>
        <p>类组件</p>

        <hr />

        <h1>{count}</h1>
        <button type="button" onClick={this.handleClick}>
          count++
        </button>

        <hr />
        <Card name="小明" />
        <Card {...c} />
      </>
    )
  }
}

export default ClassComp

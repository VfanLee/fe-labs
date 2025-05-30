import { Component } from 'react'
import PropTypes from 'prop-types'

interface PropsType {
  name: string
  sex: string
  age: number
}

// class Card extends Component<PropsType, any> {
//   constructor(props: PropsType) {
//     super(props)
//   }

//   render() {
//     const { name, sex, age } = this.props
//     return (
//       <div>
//         <p>姓名：{name}</p>
//         <p>性别：{sex}</p>
//         <p>年龄：{age}</p>
//       </div>
//     )
//   }
// }

// Card.propTypes = {
//   name: PropTypes.string.isRequired,
//   sex: PropTypes.string,
//   age: PropTypes.number,
// }

// Card.defaultProps = {
//   sex: '男',
//   age: 18,
// }

class Card extends Component<PropsType, any> {
  static propTypes = {
    name: PropTypes.string.isRequired,
    sex: PropTypes.string,
    age: PropTypes.number,
  }

  static defaultProps = {
    sex: '男',
    age: 18,
  }

  render() {
    const { name, sex, age } = this.props
    return (
      <div>
        <p>姓名：{name}</p>
        <p>性别：{sex}</p>
        <p>年龄：{age}</p>
      </div>
    )
  }
}

export default Card

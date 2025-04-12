// import PropTypes from 'prop-types'

// interface PropsType {
//   name: string
//   sex: string
//   age: number
// }

function Son(props) {
  console.log(props)
  return <div onClick={() => props.fn('son')}>{props.children}</div>
}

// Son.propTypes = {
//   name: PropTypes.string.isRequired,
//   sex: PropTypes.string,
//   age: PropTypes.number,
// }

// Son.defaultProps = {
//   sex: '男',
//   age: 18,
// }

export default Son

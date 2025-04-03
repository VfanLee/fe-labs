import PropTypes from 'prop-types'

interface PropsType {
  name: string
  sex: string
  age: number
}

function Card(props: PropsType) {
  const { name, sex, age } = props
  return (
    <div>
      <p>姓名：{name}</p>
      <p>性别：{sex}</p>
      <p>年龄：{age}</p>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string,
  age: PropTypes.number,
}

Card.defaultProps = {
  sex: '男',
  age: 18,
}

export default Card

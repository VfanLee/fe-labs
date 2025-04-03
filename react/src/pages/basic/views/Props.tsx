import Card from '../components/Card'

function Props() {
  const c = { name: '小红', sex: '女', age: 17 }

  return (
    <>
      <Card name="小明" />
      <Card {...c} />
    </>
  )
}

export default Props

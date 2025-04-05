import Son from './Son'

function Props() {
  return (
    <>
      <Son
        name="小明"
        age={18}
        isTrue={true}
        list={[1, 2, 3]}
        obj={{ a: 1, b: 2 }}
        fn={(msg) => {
          console.log(msg)
        }}
        el={<div>小明</div>}
      >
        <div>default</div>
      </Son>
    </>
  )
}

export default Props

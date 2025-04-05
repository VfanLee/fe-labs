import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <ul>
        <li>
          <div>基础</div>
          <ul>
            <li>
              <Link to="/basic/list">列表渲染</Link>
            </li>
            <li>
              <Link to="/basic/conditional">条件渲染</Link>
            </li>
            <li>
              <Link to="/basic/event-handing">事件处理</Link>
            </li>
            <li>
              <Link to="/basic/refs">模板引用</Link>
            </li>
            <li>
              <Link to="/basic/styles">Class 与 Style</Link>
            </li>
            <li>
              <Link to="/basic/forms">表单输入</Link>
            </li>
          </ul>
        </li>

        <li>
          <div>组件化</div>
          <ul>
            <li>
              <Link to="/basic/classcomp">类组件</Link>
            </li>
            <li>
              <Link to="/basic/props">Props</Link>
            </li>
          </ul>
        </li>

        <li>
          <div>hooks</div>
          <ul>
            <li>
              <Link to="/basic/custom-hooks">自定义 hooks</Link>
            </li>
            <li>
              <Link to="/basic/useState">useState()</Link>
            </li>
            {/* <li>
              <Link to="/basic/useEffect">useEffect()</Link>
            </li> */}
            <li>
              <Link to="/basic/useRef">useRef()</Link>
            </li>
            <li>
              <Link to="/basic/useContext">useContext()</Link>
            </li>
          </ul>
        </li>

        <li>
          <div>高级 & 原理</div>
          <ul>
            <li>
              <Link to="/basic/vdom">使用 createElement 创建 VDOM</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Home

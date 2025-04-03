import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <ul>
        <li>
          <div>基础</div>
          <ul>
            <li>
              <Link to="/list">列表渲染</Link>
            </li>
            <li>
              <Link to="/conditional">条件渲染</Link>
            </li>
            <li>
              <Link to="/event-handing">事件处理</Link>
            </li>
            <li>
              <Link to="/refs">模板引用</Link>
            </li>
            <li>
              <Link to="/styles">Class 与 Style</Link>
            </li>
            <li>
              <Link to="/forms">表单输入</Link>
            </li>
          </ul>
        </li>

        <li>
          <div>组件化</div>
          <ul>
            <li>
              <Link to="/classcomp">类组件</Link>
            </li>
            <li>
              <Link to="/props">Props</Link>
            </li>
          </ul>
        </li>

        <li>
          <div>hooks</div>
          <ul>
            <li>
              <Link to="/useState">useState()</Link>
            </li>
            {/* <li>
              <Link to="/useEffect">useEffect()</Link>
            </li> */}
            <li>
              <Link to="/useRef">useRef()</Link>
            </li>
          </ul>
        </li>

        <li>
          <div>高级 & 原理</div>
          <ul>
            <li>
              <Link to="/vdom">使用 createElement 创建 VDOM</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Home

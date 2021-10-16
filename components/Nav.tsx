import { Link } from '../common/routes'

const Nav = () => {
  return <div>
    <Link route="/"><a>首页</a></Link> |
    <Link route="/about"><a>关于</a></Link>
  </div>
}

export default Nav
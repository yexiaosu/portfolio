import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./navbar.css"

export default function Navbar() {
  return (
    <nav className="nav_container">
      <ul>
        <CustomLink to="/" className="nav_link">Home</CustomLink>
        <CustomLink to="/experience" className="nav_link">Experience</CustomLink>
        <CustomLink to="/project" className="nav_link">Project</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active grow" : "grow"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
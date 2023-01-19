import { Link } from "react-router-dom"
import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer_container">
        <div className="footer_text">
        ©2023 Lan Wang
        </div>
      <ul>
        <CustomLink to="/" className="footer_link">Home</CustomLink>
        <CustomLink to="/experience" className="footer_link">Experience</CustomLink>
        <CustomLink to="/portfolio" className="footer_link">Portfolio</CustomLink>
      </ul>
    </footer>
  )
}

function CustomLink({ to, children, ...props }) {
  return (
    <li>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
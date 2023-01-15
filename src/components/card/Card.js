import "./card.css"
import avatar from "../../assets/avatar.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWeixin, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Card() {
    return (
        <aside id="card" className="card" aria-labelledby="card" aria-label="card">
        <div>
          <img src={avatar} className="avatar" alt="my avatar" />
          <div className="name">Lan Wang</div>
          <div>Graduate Student</div>
          <div>Ex Intern at Bilibili Inc.</div>
          <div>M.S. in Information Science at UMich</div>
          <div>B.S.E. in ECE at SJTU</div>
          <div className="contact">
            <FontAwesomeIcon icon={faWeixin} onclick="window.open('weixin://dl/chat?yexiaosu_busu','_blank')"/>
            <FontAwesomeIcon icon={faGithub} onclick="window.open('https://github.com/yexiaosu','_blank')"/>
            <FontAwesomeIcon icon={faLinkedin} onclick="window.open('https://www.linkedin.com/in/lan-wang-a753801a4/','_blank')"/>
            <FontAwesomeIcon icon={faEnvelope} onclick="window.open('mailto:wanglanl@umich.edu','_blank')"/>
          </div>
          <button onclick="window.open('https://drive.google.com/file/d/19LAhycFy8dc7FXljWr1fb1zAPQAuVpjU/view?usp=sharing','_blank')">Resume</button>
        </div>
      </aside>
    )
  }
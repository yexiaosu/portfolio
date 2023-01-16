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
            <CustomIcon icon={faWeixin} url="weixin://dl/chat?yexiaosu_busu"></CustomIcon>
            <CustomIcon icon={faGithub} url="https://github.com/yexiaosu"></CustomIcon>
            <CustomIcon icon={faLinkedin} url="https://www.linkedin.com/in/lan-wang-a753801a4/"></CustomIcon>
            <CustomIcon icon={faEnvelope} url="mailto:wanglanl@umich.edu"></CustomIcon>
          </div>
          <button onClick={() => open("https://drive.google.com/file/d/1ZsMBQgv3lqtaOW8mFQVd323H_3WPm19q/view?usp=sharing")}>Resume</button>
        </div>
      </aside>
    )
}

const open = (link) => {
  window.open(link,'_blank');
}

function CustomIcon(props) {
  return (
    <div className="contact_icon" onClick={() => open(props.url)}>
              <FontAwesomeIcon icon={props.icon}/>
            </div>
)
}
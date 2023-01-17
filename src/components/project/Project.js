import {IoGameControllerSharp, IoLogoFigma} from "react-icons/io5"
import {BsGithub, BsFillPlayBtnFill} from "react-icons/bs"
import "./project.css"
import IM1 from "../../assets/haunted gifts.png"
import IM2 from "../../assets/rebirth.png"
import IM3 from "../../assets/mumsh.png"
import IM4 from "../../assets/docnow.png"

export default function ProjectContent() {
    return (
      <div className="content">
        <div className="project_container">
        <ProjectItem img={IM1} alt="Haunted Gifts" play="https://focs.ji.sjtu.edu.cn/silverfocs/demo/2020/p1team4/" title="Exocist: Haunted Gifts" intro="A web game of breaking bricks implemented with Elm, which is combined with STG."></ProjectItem>
        <ProjectItem img={IM2} alt="Rebirth" play="https://focs.ji.sjtu.edu.cn/silverfocs/demo/2020/p2team4/" demo="https://drive.google.com/file/d/1JvxEWI42o_TBDhQd42Tyss33I6gDPSeH/view?usp=sharing" title="Rebirth" intro="A 2D interactive suspense RPG implemented with Elm."></ProjectItem>
        <ProjectItem img={IM3} alt="Mumsh" git="https://github.com/yexiaosu/VE482/tree/main/project/p1/src" title="Mumsh" intro="A self-made Bash like shell in C that supports comprehensive syntax and built-in commands."></ProjectItem>
        <ProjectItem img={IM4} alt="DocNow" demo="https://www.figma.com/proto/LVrumGRfHhGzgAQ8nPPIar/SI582_Wireframes_Group-7_Final-Version?node-id=9%3A3&starting-point-node-id=9%3A3" prototype="https://www.figma.com/file/LVrumGRfHhGzgAQ8nPPIar/SI582_Wireframes_Group-7_Final-Version?node-id=0%3A1&t=eHTSq5dBRJg3mxla-1" title="DocNow" intro="A prototype for an online doctor visit app provides users with immediate and reliable medical care services."></ProjectItem>
        </div>
      </div>
    )
}

function ProjectItem(props) {
  const git = props.git, demo = props.demo, play = props.play, prototype = props.prototype;
  return (
    <div className="project_item">
      <div className='project_img'>
          <img src={props.img} alt={props.alt}/>
      </div>
      <h3 className="project_title">{props.title}</h3>
      <p>{props.intro}</p>
      <div className='project_button_container'>
          {play &&
            <IoGameControllerSharp size={28} className="project_icon" onClick={() => open(play)}></IoGameControllerSharp>
          }
          {git &&
            <BsGithub size={28} className="project_icon" onClick={() => open(git)}></BsGithub>
          }
          {demo &&
            <BsFillPlayBtnFill size={28} className="project_icon" onClick={() => open(demo)}></BsFillPlayBtnFill>
          }
          {prototype &&
            <IoLogoFigma size={28} className="project_icon" onClick={() => open(prototype)}></IoLogoFigma>
          }
      </div>
    </div>
  )
}

const open = (link) => {
  window.open(link,'_blank');
}


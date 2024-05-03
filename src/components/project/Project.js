import { IoGameControllerSharp, IoLogoFigma, IoIosDocument } from 'react-icons/io5'
import { BsGithub, BsFillPlayBtnFill } from 'react-icons/bs'
import './project.css'
import IM1 from '../../assets/haunted gifts.png'
import IM2 from '../../assets/rebirth.png'
import IM3 from '../../assets/mumsh.png'
import IM4 from '../../assets/docnow.png'
import IM5 from '../../assets/enlighter.png'
import IM6 from '../../assets/zelda.png'
import IM7 from '../../assets/nico.png'
import IM8 from '../../assets/slime.png'
import IM9 from '../../assets/nfa.png'

export default function ProjectContent () {
  return (
    <div className='content'>
      <div className='project_container'>
        <ProjectItem
          img={IM9}
          alt='NFA'
          prototype='https://www.figma.com/file/j4uzJGCsnYEojW6O2VDfdn/NFA--App?type=design&node-id=0-1&mode=design&t=10If3Or1zBQ2Mf3r-0'
          git='https://github.com/yexiaosu/National-Fibromyalgia-Association-App'
          doc='https://www.notion.so/Developing-a-Web-and-App-for-the-National-Fibromyalgia-Association-4381420309c54da4bb1ed5151dcb3a18'
          title='Mobile App MVP for the National Fibromyalgia Association'
          intro='A minimum viable product of mobile App for the NFA targeting at displaying current recruiting research studies to potential participants.'
        ></ProjectItem>
        <ProjectItem
          img={IM8}
          alt='Slime'
          play='https://yexiaosu.itch.io/skyward-slime-smiles-ascent'
          git='https://github.com/yexiaosu/EECS494-p3'
          demo='https://www.youtube.com/watch?v=sUc4Yxp6cdw&t=1s'
          title="Skyward Slime: Smile's Ascent"
          intro='A roguelike platformer adventure game.'
        ></ProjectItem>
        <ProjectItem
          img={IM7}
          alt='Nico'
          play='https://drive.google.com/file/d/1gPj0GaRsol5ai177v41sOtJvASdVXypc/view?usp=sharing'
          git='https://github.com/yexiaosu/EECS494-p2'
          demo='https://drive.google.com/file/d/1hbqR5qtGDobv0iSBsS9KzbI-jbUj2svN/view?usp=share_link'
          title='Nico'
          intro='A turn-based roguelike card game.'
        ></ProjectItem>
        <ProjectItem
          img={IM6}
          alt='Zelda'
          play='https://wabito.itch.io/eecs-494-p1-gold-lan-emre'
          demo='https://drive.google.com/file/d/1KFlULt3lJKEMPH78I-a8M3PR_vXsTjSu/view?usp=share_link'
          title='The Legend of Zelda (Unity Remaster)'
          intro='Remaster the first dungeon of the original The Legend of Zelda with Unity.'
        ></ProjectItem>
        <ProjectItem
          img={IM5}
          alt='Enlighter'
          git='https://github.com/yexiaosu/Wanderers'
          demo='https://github.com/yexiaosu/Wanderers#view-uiux'
          title='Enlighter'
          intro='A 2D TCG+BRG based on Unity and C#.'
        ></ProjectItem>
        <ProjectItem
          img={IM4}
          alt='DocNow'
          demo='https://drive.google.com/file/d/1RFEyT8iG6iGOX20T6sOLLXsR6D7poE3M/view?usp=sharing'
          prototype='https://www.figma.com/proto/LVrumGRfHhGzgAQ8nPPIar/SI582_Wireframes_Group-7_Final-Version?node-id=9%3A3&starting-point-node-id=9%3A3'
          title='DocNow'
          intro='A prototype for an online doctor visit app provides users with immediate and reliable medical care services.'
        ></ProjectItem>
        <ProjectItem
          img={IM3}
          alt='Mumsh'
          git='https://github.com/yexiaosu/VE482/tree/main/project/p1/src'
          title='Mumsh'
          intro='A self-made Bash like shell in C that supports comprehensive syntax and built-in commands.'
        ></ProjectItem>
        <ProjectItem
          img={IM2}
          alt='Rebirth'
          play='https://focs.ji.sjtu.edu.cn/silverfocs/demo/2020/p2team4/'
          demo='https://drive.google.com/file/d/1JvxEWI42o_TBDhQd42Tyss33I6gDPSeH/view?usp=sharing'
          title='Rebirth'
          intro='A 2D interactive suspense RPG implemented with Elm.'
        ></ProjectItem>
        <ProjectItem
          img={IM1}
          alt='Haunted Gifts'
          play='https://focs.ji.sjtu.edu.cn/silverfocs/demo/2020/p1team4/'
          title='Exocist: Haunted Gifts'
          intro='A web game of breaking bricks implemented with Elm, which is combined with STG.'
        ></ProjectItem>
      </div>
    </div>
  )
}

function ProjectItem (props) {
  const git = props.git,
    demo = props.demo,
    play = props.play,
    prototype = props.prototype
  return (
    <div className='project_item'>
      <div className='project_img'>
        <img src={props.img} alt={props.alt} />
      </div>
      <div className='project_des'>
        <h3 className='project_title'>{props.title}</h3>
        <p>{props.intro}</p>
      </div>
      <div className='project_button_container'>
        {play && (
          <CustomIcon icon={IoGameControllerSharp} url={play}></CustomIcon>
        )}
        {git && <CustomIcon icon={BsGithub} url={git}></CustomIcon>}
        {prototype && (
          <CustomIcon icon={IoLogoFigma} url={prototype}></CustomIcon>
        )}
        {demo && <CustomIcon icon={BsFillPlayBtnFill} url={demo}></CustomIcon>}
        {doc && <CustomIcon icon={IoIosDocument} url={doc}></CustomIcon>}
      </div>
    </div>
  )
}

const open = link => {
  window.open(link, '_blank')
}

function CustomIcon (props) {
  return (
    <props.icon
      size={28}
      className='project_icon'
      onClick={() => open(props.url)}
    />
  )
}

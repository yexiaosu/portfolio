import "./skill.css"
import {BsPatchCheckFill} from "react-icons/bs"

export default function Skills() {
    return (
      <div className="skills">
        <h1>Skills</h1>
        <div className="skills_container">
            <Skill name="C++" exp="advanced"></Skill>
            <Skill name="HTML" exp="advanced"></Skill>
            <Skill name="CSS" exp="advanced"></Skill>
            <Skill name="JavaScript" exp="experienced"></Skill>
            <Skill name="TypeScript" exp="experienced"></Skill>
            <Skill name="React" exp="experienced"></Skill>
            <Skill name="Python" exp="experienced"></Skill>
            <Skill name="Golang" exp="experienced"></Skill>
            <Skill name="SQL" exp="experienced"></Skill>
            <Skill name="Unity" exp="experienced"></Skill>
            <Skill name="C#" exp="experienced"></Skill>
            <Skill name="Django" exp="intermediate"></Skill>
            <Skill name="C" exp="intermediate"></Skill>
            <Skill name="MATLAB" exp="intermediate"></Skill>
            <Skill name="Verilog" exp="intermediate"></Skill>
        </div>
      </div>
    )
}

function Skill(props) {
    return (
        <article className="skills_detail">
            <BsPatchCheckFill className="skills_detail_icon"></BsPatchCheckFill>
            <div>
            <h4>{props.name}</h4>
            <h5>{props.exp}</h5>
            </div>
        </article>
    )
}
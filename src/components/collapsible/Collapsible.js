import { Children } from "react";
import "./collapsible.css";

export default function Collapsible() {
  return (
    <>
      <Strength
        title="1. Relator"
        content="I enjoy close relationship with others and find deep satisfaction in working hard with friends to achieve a goal."
      ></Strength>
      <Strength
        title="2. Learner"
        content="I have a great desire to learn and want to continously improve. The process of learning excites me."
      ></Strength>
            <Strength
        title="3. Focus"
        content="I can take a direction, follow through and make the corrections necessary on track."
      ></Strength>
            <Strength
        title="4. Responsibility"
        content="I take psychological ownership of what I say I will do. I'm committed to stable values such as honesty and loyalty."
      ></Strength>
            <Strength
        title="5. Maximizer"
        content="I focus on strengths as a way to stimulate personal and group excellence. I seek to transform something strong into something super."
      ></Strength>
    </>
  );
}

function Strength(props) {
  const open = (element) => {
    element.classList.toggle("active");
    var content = element.nextElementSibling;
    console.log(element);
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.border = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.border = "1px solid var(--color-bg-variant)";
    }
  };
  return (
    <div className="collapsible_container">
      <button className="collapsible" onClick={(e) => open(e.target)}>
        {props.title}
      </button>
      <div className="content_collapsible">
        <p>{props.content}</p>
      </div>
    </div>
  );
}

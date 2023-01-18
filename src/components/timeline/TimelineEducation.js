import "./timeline.css"

export default function TimelineEducation() {
    return (
      <div className="timeline_container">
        <ul className="timeline">
          <TimelineItem
            time="08/2022 - Present"
            title="University of Michigan, Ann Arbor, MI"
            subtitle="Master of Science in Information"
          >
          </TimelineItem>
          <TimelineItem
            time="09/2019 - Present"
            title="Shanghai Jiao Tong University, Shanghai, China"
            subtitle="B.S.E. in Electrical and Computer Engineering"
          >
          </TimelineItem>
          <TimelineItem
            time="09/2016 - 06/2019"
            title="Qibao High School, Shanghai, China"
            subtitle="High School"
          >
          </TimelineItem>
        </ul>
      </div>
    );
  }
  
  function TimelineItem({ children, ...props }) {
    return (
      <li className="timeline_item">
        <div className="timestamp">{props.time}</div>
        <div className="item_title">{props.title}</div>
        <div className="item_subtitle">{props.subtitle}</div>
        <div className="item_content">{children}</div>
      </li>
    );
  }
  
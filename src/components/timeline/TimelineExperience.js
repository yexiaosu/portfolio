import "./timeline.css"

export default function TimelineExperience() {
  return (
    <div className="timeline_container">
      <ul className="timeline">
        <TimelineItem
          time="12/2021-04/2022"
          title="Bilibili Inc."
          subtitle="Web development intern"
        >
          <ul>
            <li>
              Improved the international version of the web operation management
              platform in a team of 17 members, including both the front-end and
              back-end development.
            </li>
            <li>
              Developed a new function for operation staff to publish, edit, and
              delete the recommended media shown to users. Enable operation
              staff to complete the work without minding tech issues and enhance
              the efficiency by 10% to 20%.
            </li>
            <li>
              Implemented about 20 new interfaces for the communication between
              the front-end and databases with Golang.
            </li>
            <li>
              Redesigned and revamped 2 user interfaces for the platform with
              JavaScript.
            </li>
            <li>
              Modified other 3 existing user interfaces with JavaScript to
              improve user experience.
            </li>
            <li>
              Designed and conducted a way to manage and use currently supported
              languages of the international App, which would increase the
              efficiency to manage the supported languages by at least 50%.
            </li>
          </ul>
        </TimelineItem>
        <TimelineItem
          time="08/2020, 08/2021"
          title="Sharewinfo"
          subtitle="Data analytics intern"
        >
          <ul>
            <li>Learn basic knowledge about database, SQL, and PowerBI.</li>
            <li>Complete some small practice projects about data analysis.</li>
          </ul>
        </TimelineItem>
      </ul>
    </div>
  );
}

function TimelineItem({ children, ...props }) {
  return (
    <li className="timeline_item">
      <div className="timestamp">{props.time}</div>
      <h3 className="item_title">{props.title}</h3>
      <div className="item_subtitle">{props.subtitle}</div>
      <div className="item_content">{children}</div>
    </li>
  );
}

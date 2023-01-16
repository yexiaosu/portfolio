import React from 'react';
import Card from '../components/card/Card';

const Experience = () =>{
  return (
    <>
    <Card></Card>
    <main id="main">
        <h1>Experience &amp; Education</h1>
        <div className="content">
          <h2 className="section">Experience</h2>
          <div>
            <h3 className="title">Bilibili Inc.</h3>
            <div className="time">12/2021-04/2022</div>
            <div className="type">Server-side development intern</div>
            <ul>
              <li>
                Joined Star Project Department, working on the web developing for
                the international version of operation management platform.
              </li>
              <li>
                Implemented the interfaces for front-end communicating with the
                databases.
              </li>
              <li>
                Completed the user interfaces for the operation management platform
                by using existed components and writing JavaScript.
              </li>
              <li>
                Designed and developed a way to manage and use current supported
                languages during writing interfaces, which was easy to maintain.
              </li>
              <li>Organized and wrote some documents for current work.</li>
            </ul>
            <figure>
              <img className="media" src="images/bilibili.jpg" alt="bilibili" />
            </figure>
          </div>
          <div>
            <h3 className="title">Sharewinfo</h3>
            <div className="time">08/2020, 08/2021</div>
            <div className="type">Data analytics intern</div>
            <ul>
              <li>Learn basic knowledge about database, SQL, and PowerBI.</li>
              <li>Complete some small practice projects about data analysis.</li>
            </ul>
            <figure>
              <img className="media" src="images/sharewinfo.jpg" alt="sharewinfo" />
            </figure>
          </div>
          <h2 className="section">Education</h2>
          <div>
            <h3 className="title">University of Michigan, Ann Arbor, MI</h3>
            <div className="time">08/2022 - Present</div>
            <div className="type">Master of Science in Information</div>
          </div>
          <div>
            <h3 className="title">Shanghai Jiao Tong University, Shanghai, China</h3>
            <div className="time">09/2019 - Present</div>
            <div className="type">B.S.E. in Electrical and Computer Engineering</div>
          </div>
          <div>
            <h3 className="title">Qibao High School, Shanghai, China</h3>
            <div className="time">09/2016 - 06/2019</div>
            <div className="type">High School</div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Experience;
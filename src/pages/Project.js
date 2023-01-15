import React from 'react';
const Project = () =>{
  return (
    <main id="main">
        <h1>Portfolio</h1>
        <div className="content">
          <div>
            <h2 className="title">Break the Bricks (Web Game)</h2>
            <div className="time">06/2020</div>
            <div className="type">Team Project</div>
            <ul>
              <li>
                Make a Break the Bricks web game with Elm with the other three
                teammates.
              </li>
              <li>
                Design and add unique game mechanics and story to it, such as:
                <ul>
                  <li>Store System</li>
                  <li>Skill System</li>
                  <li>Boss Room, in which we add elements of STG</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="title">Rebirth (Web Game)</h2>
            <div className="time">06/2020</div>
            <div className="type">Team Project</div>
            <ul>
              <li>
                Make a 2D interactive suspense RPG with Elm with the other three
                teammates.
              </li>
              <li>Draw all the characters and scenes.</li>
              <li>Provide the initial outline of the story.</li>
              <li>Be responsible for the visual effects of the game (use CSS).</li>
            </ul>
            <figure>
              <img className="media" src="images/rebirth.jpg" alt="rebirth" />
            </figure>
            <video controls className="media">
              <source src="videos/rebirth_trailer.mp4" type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
          <div>
            <h2 className="title">
              Generating Conventional Identifiers by Pretrained Language Model
            </h2>
            <div className="time">03/2021-09/2021</div>
            <div className="type">Participation in Research Program (PRP) of SJTU</div>
            <ul>
              <li>Learn basic knowledge about language models.</li>
              <li>
                Apply Bert to complete the basic requirements of this program.
              </li>
              <li>Reflect on the potential problems and possible improvements.</li>
            </ul>
          </div>
          <div>
            <h2 className="title">Mumsh (a self-made shell)</h2>
            <div className="time">09/2021</div>
            <div className="type">Individual Project</div>
            <ul>
              <li>Learn basic knowledge about shell.</li>
              <li>
                Write a self-made shell in C that supports comprehensive syntax and
                some built-in commands.
              </li>
              <li>Mumsh performs similar to Bash.</li>
            </ul>
          </div>
          <div>
            <h2 className="title">LemonDB (A simple database with multithreading)</h2>
            <div className="time">10/2021-11/2021</div>
            <div className="type">Team Project</div>
            <ul>
              <li>Learn basic knowledge about multithreading.</li>
              <li>Cooperate with other three teammates.</li>
              <li>Implement queries in C++.</li>
              <li>Utilize multithreading to speed up calculation.</li>
            </ul>
          </div>
        </div>
      </main>
  );
}
export default Project;
import React, { Component } from 'react';
import Card from '../components/card/Card';
import Skills from '../components/skill/Skill';

function Home() {
  return (
    <>
    <Card></Card>
    <main id="main">
        <h1>About Me</h1>
        <div className="content">
          <p>
            I’m a first-year graduate student at UMSI, on the User-Centered Agile Development path. I majored in Electrical and Computer Engineering during my undergraduate learning process at Shanghai Jiao Tong University. Also, I have some experience in web development and data analytics because of a related internship.
          </p>
          <p>
            I have many hobbies, including drawing, playing video games, making assembled models, etc. I am quite interested in drawing, though I have no professional training. For me, this hobby is my way of decompression and a manifestation of my love for life. If you are interested in my works, you can go to Gallery to see some of them.
          </p>
        </div>
        <Skills></Skills>
    </main>
    </>
  );
}

export default Home;
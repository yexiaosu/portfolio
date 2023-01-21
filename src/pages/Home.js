import React, { Component } from 'react';
import Card from '../components/card/Card';
import Skills from '../components/skill/Skill';
import Collapsible from '../components/collapsible/Collapsible';
import "./page.css";

function Home() {
  return (
    <>
    <Card></Card>
    <main id="main">
        <h1>About Me</h1>
        <div className="content">
          <div>📚 I’m a first-year graduate student at UMSI, on the User-Centered Agile Development path.</div>
          <div>📖  majored in Electrical and Computer Engineering during my undergraduate learning process at Shanghai Jiao Tong University.</div>
          <div>💻 I’m a ex intern at Bilibili and have some experience in web development and data analytics.</div>
          <div>🎮 My interested area is software engineering, game and media.</div>
          <div>💪 My top 5 Clifton strengths are:</div>
          <Collapsible></Collapsible>
        </div>
        <Skills></Skills>
    </main>
    </>
  );
}

export default Home;
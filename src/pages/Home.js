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
          <div>📚 I’m a second-year graduate student at UMSI, on the User-Centered Agile Development path.</div>
          <div>📖 I majored in Electrical and Computer Engineering and minored in Computer Science during my undergraduate learning process at Shanghai Jiao Tong University.</div>
          <div>💻 I have two internship experiences at Naive Systems and Bilibili respectively. I was mainly responsible for web development, including front-end and back-end development.</div>
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
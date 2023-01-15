import React, { Component } from 'react';
import Card from '../components/card/Card';

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
        <h1 className="formtitle">Contact Form</h1>
        <form action="https://formspree.io/f/xayklaqn" method="POST">
          <div className="firstname">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your first name" required />
          </div>
          <div className="lastname">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name" required />
          </div>
          <div className="sub">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject of contact" required />
          </div>
          <div className="con">
            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" placeholder="Write what you want to say to me!" required defaultValue={""} />
          </div>
          <input type="submit" defaultValue="Submit" />
        </form>
    </main>
    </>
  );
}

export default Home;
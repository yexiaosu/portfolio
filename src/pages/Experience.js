import React from 'react';
import Card from '../components/card/Card';
import TimelineExperience from '../components/timeline/TimelineExperience';
import TimelineEducation from '../components/timeline/TimelineEducation';

const Experience = () =>{
  return (
    <>
    <Card></Card>
    <main id="main">
        <h1>Experience &amp; Education</h1>
        <h2>Experience</h2>
          <TimelineExperience></TimelineExperience>

          <h2>Education</h2>
          <TimelineEducation></TimelineEducation>
      </main>
    </>
  );
}
export default Experience;
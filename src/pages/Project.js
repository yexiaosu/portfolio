import React from 'react';
import Card from '../components/card/Card';
import ProjectContent from '../components/project/Project';

const Project = () =>{
  return (
    <>
    <Card></Card>
        <main id="main">
        <h1>Portfolio</h1>
        <ProjectContent></ProjectContent>
      </main>
    </>
  );
}
export default Project;
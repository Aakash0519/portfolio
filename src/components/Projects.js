import React from 'react';
import Project from './Project';

const Projects = props => {
    return (
      <section id="projects">
        <div className="projects-container">
          <div className="heading">
            <h3 className="title">My Works</h3>
            <p className="separator" />
            <p className="subtitle">
              Here's a list of the projects I've been working on recently.
              To see my other projects click below.              
            </p>
          </div>
          <div id="allProject"><a href="http://www.github.com/aakash0519" target="_blank">All projects</a></div>
          <div className="projects-wrapper">
            <Project
              title="The Gratified Blog."
              img= {'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
              tech="Wordpress"
              link="https://thegratifiedblog.com"
              repo="https://thegratifiedblog.com"
            >
              <small>
                Built using Wordpress.
              </small>
              <p>
                This is my digital company .I had made this site using Wordpress.
              </p>
            </Project>
            <Project
              title="Beach Resort."
              img={'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}
              tech="React"
              link="https://react-resort-learning-aakash.netlify.app/"
              repo="https://github.com/aakash0519/react-beach-resort"
            >
              <small>
                Built using React, React-router, Node.js, Contentful, Netlify
              </small>
              <p>
                A website to check the rooms of a beach resort
              </p>
            </Project>                        
          </div>
        </div>
      </section>
    );
  };
  
  

export default Projects

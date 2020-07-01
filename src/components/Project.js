import React from 'react'
import {FaCss3Alt,FaJsSquare,FaReact,FaNodeJs} from 'react-icons/fa'

const Project = props => {
    const tech = {
      
      css: <FaCss3Alt/>,
      js: 'fab fa-js-square',
      react: <FaReact/>,
      vue: 'fab fa-vuejs',
      d3: 'far fa-chart-bar',
      node: 'fab fa-node'
    };
  
    const link = props.link || 'http://';
    const repo = props.repo || 'http://';
  
    return (
      <div className="project">
        <a className="project-link" href={link} target="_blank" >
          <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
        </a>
        <div className="project-details">
          <div className="project-tile">
            <p className="icons">
              {props.tech.split(' ').map(t => (
                <i className={tech[t]} key={t} />
              ))}
            </p>
            {props.title}{' '}
          </div>
          {props.children}
          <div className="buttons">
            <a href={repo} target="_blank" >
              View source <i className="fas fa-external-link-alt" />
            </a>
            <a href={link} target="_blank" >
              Try it Live <i className="fas fa-external-link-alt" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  

export default Project;

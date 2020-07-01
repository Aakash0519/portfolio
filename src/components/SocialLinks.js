import React from 'react'
import {FaTwitter,FaGithub,FaInstagram,FaLinkedin} from 'react-icons/fa'

const SocialLinks = props => {
    return (
      <div className="social">
        <a
          href="https://twitter.com"
          target="_blank"          
          title="Link to Aakash's Twitter profile"
        >
          {' '}
          <FaTwitter/>
        </a>
        <a
          id="profile-link"
          href="https://github.com/aakash0519"
          target="_blank"          
          title="Link to Aakash's GitHub Profile"
        >
          {' '}
          <FaGithub/>
        </a>
        <a
          href="https://instagram.com/aakash_taneja"
          target="_blank"          
          title="Link to Aakash's Codepen Profile"
        >
          {' '}
          <FaInstagram/>
        </a>
        <a
          href="https://linkedin.com/in/aakash-taneja"
          target="_blank"          
          title="Link to Aakash's Codepen Profile"
        >
          {' '}
          <FaLinkedin/>
        </a>
      </div>
    );
  };

export default SocialLinks;

import React from 'react'

const About = props => {
    return (
      <section id="about">
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>Who am I?</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
              <h4 className="subtitle">My name is Aakash.</h4>
              <p>
                I am a web developer and designer based in the beautiful Pink City of Rajasthan,
                India.
              </p>
              <p>
                {/* apni tareef */}
                I am a self taught designer with experince in creating beautiful websites through creative frontend.I am a problem solver.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio repellendus laudantium vel tempore labore amet ullam 
                officiis ratione? Tenetur quod illum eveniet nisi error repudiandae quia earum velit odio harum?
              </p>
            </div>
            <div className="title">
              <h3>What do I do?</h3>
              <p className="separator" />
            </div>
            <div className="desc">
              <h4 className="subtitle">I'm a Developer.</h4>
              <p>
                For the front-end I usually work with Javascript, either standalone or including
                popular frameworks like ReactJS. I also make the web pretty by using
                CSS and, whenever needed, any of their friends: Bootstrap, Tailwind CSS, etc.
              </p>
              <p>
                For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). I also
                work on CMS websites like wordpress whenever needed.
              </p>
            </div>
            <div className="desc">
              <h4 className="subtitle">Also a Programmer and an Engineer.</h4>
              <p>
                I am currently pursuing my Btech. in Electronics And Communication Engineering form the LNMIIT, Jaipur.
                Expedita nostrum quidem impedit reprehenderit 
                hic eaque optio pariatur, necessitatibus odio rem recusandae! Corrupti, possimus?            
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae expedita dolor, 
                illum in recusandae nisi sint molestiae eaque odit dicta enim, deserunt ex nesciunt 
                nostrum similique. Commodi dolor consequatur non.
              </p>
            </div>
          </article>
        </div>
      </section>
    );
  };

export default About

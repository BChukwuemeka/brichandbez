import React from 'react';
import ai from '../../assets/ai.png'
import './possibility.css';
import Contact from '../../components/Contact/Contact';

const Possibility = () => (
  <>
            <div className="awesome">
                  <span>Get in touch</span><span>Contact Us</span>
            </div>

            <div className="BnB__possibility section__padding" id="possibility">              
              
              <div className="BnB__possibility-content">
                    <h4>Request Early Access to Get Started</h4>
                        <h1 className="gradient__text BnB__possibility-content-left">The possibilities are <br /> beyond your imagination</h1>
                          <p>We believe in the power of connections and the endless opportunities they bring.  Explore new horizons, push boundaries, and reach heights beyond your imagination. Whether you have a question, a brilliant idea, or simply want to connect with our team, we're here to listen.

                              Let us know your name, email address, and share your thoughts with us. We value every message and promise to respond promptly. Together, we can embark on a journey of innovation, collaboration, and transformative experiences.

                                Don't hesitate! Contact us today and let's discover the extraordinary together. The possibilities are waiting, ready to be explored beyond your wildest imagination.
                          </p>
                    <h4>Request Early Access to Get Started</h4>
              </div>

              <div className="BnB__possibility-content-contact">
                {/* <img src={ai} alt="possibility" /> */}
                <Contact />
              </div>

            </div>
  </>
);

export default Possibility;

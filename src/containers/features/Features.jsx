import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Empowering Businesses with Technology',
    text: "At Brich & Bez, we are driven by your success. We collaborate closely with you to understand your unique vision and deliver exceptional results that exceed your expectations.",
  },
  {
    title: ' Delivering Intelligent Solutions for Real-World Challenges',
    text: 'We are committed to delivering intelligent solutions that address real-world challenges, from automating routine tasks to improving decision-making processes.',
  },
  {
    title: "Don't miss out on this opportunity to revolutionize your online presence.",
    text: 'Picture streamlining your internal processes, boosting productivity, and optimizing operations with tailored web and mobile applications designed specifically for your needs.',
  },
  {
    title: 'Fostering a Culture of Collaboration and Innovation',
    text: 'Our team is built on a culture of collaboration and innovation, where everyone is encouraged to bring their unique perspectives and skills to the table, driving success for our clients and the broader AI community.',
  },
];

const Features = () => (
  <div className="BnB__features section__padding" id="features">
    <div className="BnB__features-heading">
      <h1 className="gradient__text">Visualize your brand leaving an indelible mark on the digital landscape, commanding attention, and standing out amidst the competition.</h1>
      <h2 style={{ margin: '1rem', color: "white" }}>Make it Happen.</h2> 
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="BnB__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

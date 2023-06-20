import './header.css'
import people from '../../assets/people.png'
import possibilityImage from '../../assets/possibility.png';
import emailjs from '@emailjs/browser';
import { useState } from 'react';




const Header = () => {


   
    const [email, setEmail] = useState('');
    const [done, setDone] = useState(false)


    const handleButtonClick = () => {
        const phoneNumber = '+23407053896112'; // Replace with the desired phone number
    
        // Open the default phone app with the specified phone number
        window.location.href = `tel:${phoneNumber}`;
      };


  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Configure your email service and template IDs
      const serviceId = 'service_9ch8ws7';
      const templateId = 'template_3yfuna6';
      const userId = '3ESf2R1AzBgZUiyR9';
  
      // Set up the email parameters
      const templateParams = {
        
        'user-email': email,
       
      };
  
      // Send the email
      emailjs.send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          console.log('Successful!', response.status, response.text);
          setDone(true);
          // Reset the form after successful submission
          handleButtonClick();
          setEmail('');
        })
        .catch((error) => {
          console.error('Error sending message:', error);
        });
    };




    return ( 
        <div className="BnB__header section__padding" id="home">
            <div className="BnB__header-content">
                <h1 className='gradient__text'>
                Brich and Bez Media Agency
                </h1>
                <p>Let's Build Something amazing </p>
                <p>Web Applications, Websites, Mobile Applications</p>


                <div className="BnB__header-content__input">
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Your Email Address" />
                    <button type="button" onClick={handleSubmit}>Get Started</button>
                    <span>{done && "Submission Successful! We'll Get back to you"}</span>
                </div>
                <div className="BnB__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>

            </div>
                <div className="BnB__header-image">
                <img src={possibilityImage} alt="ai" />

                </div>
        </div>
        );
}
 
export default Header;
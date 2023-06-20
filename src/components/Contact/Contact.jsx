import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';





const Contact = () => {

    const form = useRef(null);


      const [name, setName] = useState('');
      const [number, setNumber] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');
      const [done, setDone] = useState(false)
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Configure your email service and template IDs
        const serviceId = 'service_9ch8ws7';
        const templateId = 'template_3yfuna6';
        const userId = '3ESf2R1AzBgZUiyR9';
    
        // Set up the email parameters
        const templateParams = {
          'user-name': name,
          'user-number': number,
          'user-email': email,
          message: message,
        };
    
        // Send the email
        emailjs.send(serviceId, templateId, templateParams, userId)
          .then((response) => {
            console.log('Email sent!', response.status, response.text);
            setDone(true);
            // Reset the form after successful submission
            setName('');
            setNumber('');
            setEmail('');
            setMessage('');
          })
          .catch((error) => {
            console.error('Error sending message:', error);
          });
      };









        // const form = useRef(null);

        // const [done, setDone] = useState(false)
      
        // const sendEmail = (e) => {
        //   e.preventDefault();
      
        //   emailjs.sendForm('service_9ch8ws7', 'template_3yfuna6', form.current, '3ESf2R1AzBgZUiyR9')
        //     .then((result) => {
        //         console.log(result.text);
        //         setDone(true);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        // };
      


    return ( 
        <>
        <div className="contact-form">
                
             </div>
             <div className="c-right">
                <form className="contact-form" id='contact' ref={form} onSubmit={handleSubmit}>

                        <input 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                            className="user" 
                            placeholder="Name" />

                        <input 
                            type="number" 
                            value={number}
                            onChange={(e) => setNumber(e.target.value)} 
                            className="user" 
                            placeholder="Phone No" />

                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="user" 
                            placeholder="Email" 
                            required
                            />

                        <textarea 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            id="" 
                            cols="30" 
                            rows="10" 
                            className="user" 
                            placeholder="Message"
                            required
                            />

                        <input type="submit" value="Tell us about your project" className="button" />

                        <span>{done && "Submission Successful! We'll Get back to you"}</span>

                   
                </form>
                </div>

      </>









        // <div className="contact-form" id='contact'>
        //      <div className="w-left">
        //          <div className="awesome">
        //             <span>Get in touch</span><span>Contact Us</span>
        //          </div>
        //      </div>
        //      <div className="c-right">
        //          <form action="" ref={form} onSubmit={sendEmail} >
        //          <input type="text" name="user-name" className="user" placeholder="Name" />
        //          <input type="number" name="user-number" className="user" placeholder="Phone No" />
        //          <input type="email" name="user-email" className="user" placeholder="Email" />
        //          <textarea name="message" id="" cols="30" rows="10" className="user" placeholder="Message"/>
        //          <input type="submit" value="Tell us about your project" className="button" />
        //          <span>{done && "Submission Successful! We'll Get back to you"}</span>
        //          <div className="blur c-blur1">

        //          </div>
        //          </form>
        //      </div>
        //  </div>
     );
}
 
export default Contact;
import React, {useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './ContactUs.css'
import emailjs from 'emailjs-com';

const Result = () =>{
  return (<p> Your Message has been successfully sent. You will be contacted soon</p>
    );
  
}

const ContactUs = () => {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lxa9p3s', 'template_g3tkoeb', e.target, 'user_qcjsnmbpDqqXLxyJLXcG6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  }

  return (
    <div>
      <div class="contactme" id="contact">
      <div class="contactOverlay">
        <div class="container">
          <div class="form">
            <form action="" onSubmit={sendEmail}>
              <div class="formWord">
                <h2>Say Hello!</h2>
                <span>Full Name</span>
                <br />
                <input class="input100" type="text" name="fullName" required />
                <br />
                <span>Phone Number</span>
                <br />
                <input class="input100" type="text" name="phone" required />
                <br />
                <span>Enter Email</span>
                <br />
                <input class="input100" type="text" name="email" required />
                <br />
              </div>
              <div class="formWord">
                <span>Message</span>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>

                <div class="row">{result ? <Result/>: null}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
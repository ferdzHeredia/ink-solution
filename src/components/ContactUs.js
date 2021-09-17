import React, { useState, useRef } from "react";
// import "font-awesome/css/font-awesome.min.css";
import { Toast } from "primereact/toast";
import "./ToastDemo.css";

import "./ContactUs.css";
import { Card } from "primereact/card";
import emailjs from "emailjs-com";

const ContactUs = () => {

   const toast = useRef(null);
  const [result, showResult] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    let status = true;

    await (async () => {
      await emailjs
        .sendForm(
          "service_lxa9p3s",
          "template_g3tkoeb",
          e.target,
          "user_qcjsnmbpDqqXLxyJLXcG6"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
            status = false;
          }
        );
    })();

    e.target.reset();
    showMessage(status);
  };
  const showMessage = (status) => {
    toast.current.show({
      severity: status ? "success" : "error",
      summary: status ? "Success" : "Error",
      detail: status
        ? "Your Message was sent successfully"
        : "There was an error while sending your message, try again later",
      life: 5000,
    });
  };

  return (
    // className="p-col-12" style={{ margin: "auto", marginTop: "1rem" }}
    <Card>
      <Toast ref={toast} />
      <div className="p-col-4 p-col-xs-12 p-col-sm-12 ">
      <div className="contactme" id="contact">
        <div className="contactOverlay">
          <div className="container">
            <div className="form">
              <form action="" onSubmit={sendEmail}>
                <div className="formWord">
                  <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
                    CONTACT US
                  </h2>
                  <span>Full Name</span>
                  <br />
                  <input type="text" name="fullName" required />
                  <br />
                  <span>Phone Number</span>
                  <br />
                  <input type="text" name="phone" required />
                  <br />
                  <span>Enter Email</span>
                  <br />
                  <input type="text" name="email" required />
                  <br />
                  
                  </div></form> </div></div></div></div></div>
        </Card>
    );
    
    }

export default ContactUs;

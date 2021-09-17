import React, { useState, useRef } from "react";
// import "font-awesome/css/font-awesome.min.css";
import { Toast } from "primereact/toast";
import "./ToastDemo.css";

import "./ContactUs.css";
import { Card } from "primereact/card";
import emailjs from "emailjs-com";

const ContactUs = () => {
<<<<<<< HEAD

  //listen for window resize event
  // window.addEventListener("resize", function (event) {
  //   var newWidth = window.innerWidth;
  //   var newHeight = window.innerHeight;
  //   console.log(newWidth)
  // });
  

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success Message",
      detail: "Message Content",
      life: 3000,
    });
  };

=======
>>>>>>> d82d940036edf029ed7982b46c8ec13d5ab943af
  const toast = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    emailjs
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
        }
      );

    e.target.reset();
    showSuccess();
  };

  return (
    // className="p-col-12" style={{ margin: "auto", marginTop: "1rem" }}
    <Card >
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
=======

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
    <Card className="p-col-6" style={{ margin: "auto", marginTop: "1rem" }}>
      <div>
        <Toast ref={toast} />
        <h5>Severities</h5>

        <div className="contactme" id="contact">
          <div className="contactOverlay">
            <div className="container">
              <div className="form">
                <form action="" onSubmit={sendEmail}>
>>>>>>> d82d940036edf029ed7982b46c8ec13d5ab943af
                  <div className="formWord">
                    <span>Message</span>
                    <br />
                    <textarea name="message" required></textarea>
                    <br />
<<<<<<< HEAD
                    <div className="submitButton">
                      <button>SUBMIT</button>
=======
                    <span>Enter Email</span>
                    <br />
                    <input
                      className="input100"
                      type="text"
                      name="email"
                      required
                    />
                    <br />
                    <div className="formWord">
                      <span>Message</span>
                      <br />
                      <textarea name="message" required></textarea>
                      <br />
                      <div className="submitButton">
                        <button>SUBMIT</button>
                      </div>
                      <div className="row">
                        {result ? <showSuccess /> : null}
                      </div>
>>>>>>> d82d940036edf029ed7982b46c8ec13d5ab943af
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </Card>
  );
};

export default ContactUs;

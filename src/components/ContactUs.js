import React, { useState, useRef } from "react";
// import "font-awesome/css/font-awesome.min.css";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import "./ToastDemo.css";

import "./ContactUs.css";
import { Card } from "primereact/card";
import emailjs from "emailjs-com";

const Result = () => {
  return (
    <p> Your Message has been successfully sent. You will be contacted soon</p>
  );
};

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
    <Card className="p-col-6" style={{ margin: "auto", marginTop: "1rem" }}>
      <div>
        <Toast ref={toast} />
        <h5>Severities</h5>

        <div className="contactme" id="contact">
          <div className="contactOverlay">
            <div className="container">
              <div className="form">
                <form action="" onSubmit={sendEmail}>
                  <div className="formWord">
                    <h2>Contact Us!</h2>
                    <span>Full Name</span>
                    <br />
                    <input
                      className="input100"
                      type="text"
                      name="fullName"
                      required
                    />
                    <br />
                    <span>Phone Number</span>
                    <br />
                    <input
                      className="input100"
                      type="text"
                      name="phone"
                      required
                    />
                    <br />
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

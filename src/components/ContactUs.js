import React, { useRef } from "react";
// import "font-awesome/css/font-awesome.min.css";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import "./ToastDemo.css";
import "./ContactUs.css";
import { Card } from "primereact/card";
import emailjs from "emailjs-com";

const ContactUs = () => {

  const toast = useRef(null);
  let status = false

  const sendEmail = async (e) => {
    e.preventDefault();

    status = true;

    await (async () => {
      await emailjs
        .sendForm(
          "service_8lwe87b",
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
    <Card  style={{ border: "none", boxShadow: "none" }}>
      <br/>
      <Toast ref={toast} />
      <div className="p-grid nested-grid p-justify-center" >
        <div className="contactme p-col-12 p-md-8 p-lg-7 p-sm-12" id="contact">
          <div className="p-grid p-justify-center">
            <div className="container p-col-6 p-justify-center">
              <div>
                <form  action="" onSubmit={sendEmail} style={{ lineHeight:"30px"}}>
                  <div className="formWord p-col p-sm-10 ">
                    <h2>CONTACT US</h2>
                    <span>Full Name</span>
                    <br />
                    <input
                      className="p-col-12 p-md-12 p-lg-12 p-sm-12 p-justify-center "
                      type="text"
                      name="fullName"
                      required
                    />
                    <br />
                    <span>Phone Number</span>
                    <br />
                    <input
                      className="p-col-12 p-md-12 p-lg-12 p-sm-12 p-justify-center"
                      type="text"
                      name="phone"
                      required
                    />
                    <br />
                    <span>Enter Email</span>
                    <br />
                    <input
                      className="p-col-12 p-md-12 p-lg-12 p-sm-12 p-justify-center"
                      autoComplete="off"
                      type="text"
                      name="email"
                      required
                    />
                    <br />
                    <span>Message</span>
                    <br />
                    <textarea className="p-col-12 p-md-12 p-lg-12 p-sm-12 " name="message" required></textarea>
                    <div>
                      <br />
                      <Button className="button" style={{ backgroundColor: "teal", borderRadius: "15px" }}>
                        SUBMIT
                      </Button >
                      <div>
                        {status ? <showSuccess /> : null}
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
// !nk$0luti0n2021
// service_8lwe87b
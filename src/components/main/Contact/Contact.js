import React, { useRef } from "react";
import "./Contact.scss";
import Icons from "./Icons.js";
import Header from "../Header/Header.js";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8lxlgkr",
        "template_5p9b133",
        form.current,
        "0LVgk2yRb3Jy3qoPU"
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
  };
  return (
    // <div>
    <div className="contact-wrapper">
      <Header header="Hire Me!" />

      <div className="icon-contact">
        {" "}
        <div className="icons">
          <Icons />
        </div>
        <div className="contact">
          <div className="description">
            <p>Thanks for your interest in getting in touch.</p>
            <p>
              Want to say "Hey!" Got something you would like to ask? New
              Project or opportunity? Want to hire me? Please use the form
              below.
            </p>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="full-name">
                <label htmlFor="First-name"> Name</label>
                <input type="text" name="name" />
              </div>
              <div className="email">
                <label htmlFor="email-address">Email </label>
                <input type="email" name="email" />
              </div>
              <div className="message">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="" cols="30" rows="10"></textarea>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Contact;

import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Contact = () => {
  const Promise = () => {
    toast.success("The message has been sent successfully", {
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: "dark",
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_59tichg",
      "template_1iitvi6",
      form.current,
      "1kXXNgYxJ1tFnhJTT"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <h5>Get In Touch</h5>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+54 358 402-4726</h5>
            <a
              href="https://wa.me/543584024726"
              target="_blank"
              rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>santiagoemprendedor9@gmail.com</h5>
            <a
              href="mailto:santiagoemprendedor9@gmail.com"
              target="_blank"
              rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>santigalaniz</h5>
            <a
              href="https://m.me/100008305805048"
              target="_blank"
              rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required></textarea>
          <button type="submit" className="btn btn-primary" onClick={Promise}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

// constructor(props){
//   super(props)

//   this.state = {
//     HandleSubmit = true
//   }
// }
// render() {
//   if (this.state.HandleSubmit){
//     return (
//       {notify}
//     )
//   }

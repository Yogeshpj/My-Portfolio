import "./contact.css";
import Phone from "..//images//phone.png"
import Email from "..//images//email.png"
import Address from "..//images//address.png"

import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7u95hym",
        "template_fykdilq",
        formRef.current,
        "GbGMMz3bs0gzrmvuz"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Stay in touch</h1>
          <div className="c-info">
            <div className="c-info-item">
            <img src={Phone} alt="" className="c-icon" />
              +91 9345283791
            </div>
            <div className="c-info-item">
            <img className="c-icon" src={Email} alt="" />
              jayayogesh777@gmail.com
            </div>
            <div className="c-info-item">
            <img className="c-icon" src={Address} alt="" />
              50A,Rattai Sutri Palayam,Avalpoondurai(po),Erode.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
             help!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
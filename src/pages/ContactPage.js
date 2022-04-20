import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import EmailIcon from "@mui/icons-material/Email";
import LocatinIcon from "@mui/icons-material/LocationOn";
import ContactItem from "../components/ContactItem";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const ContactPageStyled = styled.section`
  .contact-section {
    /* display: grid; */
    /* grid-template-columns: repeat(2, 1fr); */
    /* grid-column-gap: 2rem; */
    display: flex;
    gap: 5rem;
    justify-content: center;
    @media screen and (max-width: 1500px) {
      flex-direction: column;
      max-width: 600px;
      margin: 0 auto;
    }

    .right-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background-color: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
          resize: vertical;
        }
      }
    }
  }
`;

export default function ContactPage() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ggdktbf",
        "template_gdlq9el",
        e.target,
        "pHibU9NTqEfCCI2kD"
      )
      .then((res) => {
        console.log(res);
        toast.success("Success", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("text-area").value = "";
  };
  return (
    <MainLayout>
      <Title title="Contact" span="Contact" />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form" onSubmit={sendEmail}>
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input type="text" name="name" id="name" required />
              </div>

              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input type="email" name="user_email" id="email" required />
              </div>

              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input type="text" name="user_subject" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="message">Enter your message*</label>
                <textarea
                  name="message"
                  id="text-area"
                  cols="30"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="form-field">
                <PrimaryButton title="submit" />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              Icon={EmailIcon}
              title="Email"
              contact1="rafal.bialowski2@gmail.com"
            />
            <ContactItem
              Icon={LocatinIcon}
              title="Location"
              contact1="Poland, Lublin"
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

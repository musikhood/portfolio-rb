import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocatinIcon from "@mui/icons-material/LocationOn";
import ContactItem from "../components/ContactItem";
import emailjs from "emailjs-com";

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    .right-content {
      display: flex;
      flex-direction: column;
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
      })
      .catch((err) => console.log(err));
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
                <input type="text" name="name" id="name" />
              </div>

              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input type="email" name="user_email" id="email" />
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
                ></textarea>
              </div>
              <div className="form-field">
                <PrimaryButton title="submit" />
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              Icon={PhoneIcon}
              title="Phone"
              contact1="+48123456789"
            />
            <ContactItem
              Icon={EmailIcon}
              title="Email"
              contact1="example@mail.com"
            />
            <ContactItem Icon={LocatinIcon} title="Location" contact1="lbn" />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

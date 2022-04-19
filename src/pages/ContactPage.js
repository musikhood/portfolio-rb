import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocatinIcon from "@mui/icons-material/LocationOn";
import ContactItem from "../components/ContactItem";

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
  return (
    <MainLayout>
      <Title title="Contact" span="Contact" />
      <ContactPageStyled>
        <InnerLayout className="contact-section">
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form">
              <div className="form-field">
                <label htmlFor="name">Enter your name*</label>
                <input type="text" id="name" />
              </div>

              <div className="form-field">
                <label htmlFor="email">Enter your email*</label>
                <input type="email" id="email" />
              </div>

              <div className="form-field">
                <label htmlFor="subject">Enter your subject</label>
                <input type="text" id="subject" />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Enter your message*</label>
                <textarea
                  name="text-area"
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

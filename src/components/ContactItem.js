import React from "react";
import styled from "styled-components";

const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-grey);
  display: flex;
  align-items: center;

  margin-top: 2rem;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    margin: 2rem auto;
    gap: 1.5rem;
    width: 270px;
  }

  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    @media screen and (max-width: 700px) {
      margin: 0;
    }

    svg {
      font-size: 2.3rem;
    }
  }
  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
      @media screen and (max-width: 700px) {
        font-size: 1rem;
      }
    }
    p {
      @media screen and (max-width: 700px) {
        font-size: 1rem;
      }
    }
  }
`;

export default function ContactItem({ Icon, title, contact1 }) {
  return (
    <ContactItemStyled>
      <div className="left-content">
        <Icon />
      </div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{contact1}</p>
      </div>
    </ContactItemStyled>
  );
}

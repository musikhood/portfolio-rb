import React from "react";
import styled from "styled-components";

const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-dark-grey);
  display: flex;
  align-items: center;

  margin-top: 2rem;

  .left-content {
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;

    svg {
      font-size: 2.3rem;
    }
  }
  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
    }
    p {
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

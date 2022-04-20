import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import avatar from "../img/avatar.png";

const NavigationStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img {
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color);
      color: white;
      &::before {
        opacity: 0;
      }
    }
    li {
      display: block;
      a {
        display: block;
        position: relative;
        padding: 0.4rem 0;
        z-index: 4;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        &:hover {
          cursor: pointer;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 100%;
          background-color: var(--primary-color);
          transition: width 0.4s ease-in-out;
          z-index: 3;
          opacity: 0.21;
        }
      }

      a:hover::before {
        width: 100%;
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1rem 0;
      font-size: 0.9rem;
      display: block;
      text-align: center;
    }
  }
`;

export default function Navigation({ setNavToggle }) {
  return (
    <NavigationStyle>
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink
            to="/"
            activeClassName="active-class"
            exact
            onClick={() => {
              setNavToggle(false);
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            activeClassName="active-class"
            exact
            onClick={() => {
              setNavToggle(false);
            }}
          >
            About Me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/projects"
            activeClassName="active-class"
            exact
            onClick={() => {
              setNavToggle(false);
            }}
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            activeClassName="active-class"
            exact
            onClick={() => {
              setNavToggle(false);
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@2022 My Portfolio</p>
      </footer>
    </NavigationStyle>
  );
}

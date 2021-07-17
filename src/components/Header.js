import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

function Header() {
  return (
    <Main>
      <NavBar>
        <Logo>
          <h4>My Portfolio</h4>
        </Logo>
        <ul>
          <li>
            <Link
              to="header"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-80}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-80}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="about"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-80}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-80}
            >
              Contact Me
            </Link>
          </li>
          <li>
            <Link
              to="certification"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-80}
            >
              Certifications
            </Link>
          </li>
        </ul>
      </NavBar>
    </Main>
  );
}

export default Header;

const Main = styled.div``;

const NavBar = styled.div`
  position: fixed;
  top: 0%;
  display: flex;
  align-items: center;
  background: #000;
  width: 100%;
  height: 70px;
  letter-spacing: 2px;

  ul {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
    margin: 0;
    height: 100%;

    li {
      list-style-type: none;
      padding: 10px 10px;
      margin: 0 10px;

      a {
        text-decoration: none;
        color: #f9f9f9;
        transition: all 0.2s ease-in;
        cursor: pointer;
        position: relative;

        &:hover {
          color: gray;
        }

        &.active {
          color: gray;
        }

        &.active::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: -10px;
          height: 1px;
          width: 100%;
          background-color: #f9f9f9;
          transition: all 0.2s ease-in;
        }
      }
    }
    li:nth-last-of-type(1) {
      margin-right: 30px;
    }
  }
`;

const Logo = styled.div`
  h4 {
    color: #fff;
    padding: 0 10px;
    margin: 0 20px;
    font-size: 20px;
    font-weight: 500;
  }
`;

import React from "react";
import styled from "styled-components";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div>
      <FooterNav>
        <p>&copy; copyright {date}</p>
        <Nav>
          <a href="#">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram-square"></i>
          </a>
          <a href="#">
            <i className="fab fa-github-square"></i>
          </a>
        </Nav>
      </FooterNav>
    </div>
  );
}

export default Footer;

const FooterNav = styled.div`
  margin-top: 50px;
  height: 70px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  color: #f9f9f9;

  p {
    padding: 8px 16px;
  }
`;

const Nav = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 0 15px;

  a {
    text-decoration: none;
    padding: 8px 8px;
    color: #f9f9f9;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: scale(0.9, 0.9);
    }

    i {
      font-size: 25px;
    }
  }
`;

import React from "react";
import styled, { keyframes } from "styled-components";

function Intro() {
  return (
    <div id="header">
      <HeroImage>
        <Name>
          <h1>Hello, I'm Niraj Lama</h1>
          <h4>
            Front End Developer Looking For Internship Opportunity in ReactJs
          </h4>
          <i className="fas fa-arrow-circle-down"></i>
          <p>Welcome</p>
        </Name>
      </HeroImage>
    </div>
  );
}

export default Intro;

const slideFromTop = keyframes`
    from { transform: translateY(-100%); opacity: 0.3; }
    to { transform: translateY(0%); opacity: 1; }
`;

const HeroImage = styled.div`
  position: relative;
  margin: 0;
  top: 0;
  width: 100%;
  height: 650px;
  background-image: url("images/hero_image_2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
  z-index: -1;
`;

const Name = styled.div`
  position: absolute;
  top: 25%;
  left: 0%;
  color: white;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  animation: ${slideFromTop} ease-in 1.5s;

  h1 {
    font-size: 80px;
    font-weight: 400;
    padding: 0 10px;
    margin: 0;
  }

  h4 {
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 2px;
  }

  i {
    padding: 25px 0;
    font-size: 70px;
  }

  p {
    font-size: 50px;
    font-style: italic;
    font-weight: 400;
    opacity: 0.5;
    padding: 30px 10px;
    margin: 0;
    position: relative;

    &::before,
    &::after {
      position: absolute;
      top: 55%;
      left: 36%;
      content: "";
      width: 50px;
      height: 2px;
      background-color: #f9f9f9;
    }

    &::after {
      left: 60%;
    }
  }
`;

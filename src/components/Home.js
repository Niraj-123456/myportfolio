import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Intro from "./Intro";
import projectDataArr from "./ProjectData";

const projectData = projectDataArr.map((data, id) => {
  return (
    <Card key={id} project={data.project} completed={data.completionDate} />
  );
});
function Home() {
  return (
    <Container id="home">
      <Intro />
      <Main id="projects">
        <Heading>My Projects</Heading>
        <CardContainer>{projectData}</CardContainer>
      </Main>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 140px);
`;

const Main = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 100px;
  letter-spacing: 2px;
`;

const Heading = styled.h1`
  text-align: center;
  color: #f9f9f9;
  text-transform: uppercase;
  font-weight: 300;
`;

const CardContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 50px;
  color: #f9f9f9;
  width: 100%;
`;

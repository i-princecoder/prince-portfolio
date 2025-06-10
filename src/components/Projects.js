import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";  
import rps from "../assets/img/rock_paper_scissors.png";
import brancy from "../assets/img/brancy.png";
import comingsoon from "../assets/img/comingsoon.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Brancy",
      description: "Cosmetic e-commerce website",
      imgUrl: brancy,
      link: "https://github.com/special-char/semi-colon-cosmetic?tab=readme-ov-file#readme",
    },
    { 
      title: "Rock Paper Scissors",
      description: "Game",
      imgUrl: rps,
      link: "https://rock-paper-scissors-game-re6u.vercel.app",
    },
    {
      title: "Coming soon",
      description: "",
      imgUrl: comingsoon,
    },
    {
      title: "Coming soon",
      description: "",
      imgUrl: comingsoon,
    },
    {
      title: "Coming soon",
      description: "",
      imgUrl: comingsoon,
    },
    {
      title: "Coming soon",
      description: "",
      imgUrl: comingsoon
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Take a look at some of the projects I’ve worked on! These reflect my journey as an IT engineer and my passion for building practical, user-friendly web applications.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first"> 
                     {/* here we use react-bootstrap-tabs  */}
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";  
import brancy from "../assets/img/brancy.jpg";
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
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>        
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
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

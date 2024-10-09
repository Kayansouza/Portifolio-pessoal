import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../img/Project -1.png";
import projImg2 from "../img/Project-2.png";
import projImg3 from "../img/project- 3. png.jpeg";  // Corrigido nome do arquivo
import projImg4 from "../img/project.jpeg"
import projImg5 from "../img/projetc-5.jpeg";
import colorSharp2 from "../img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Lobo - Desenvolvedor",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://657913b4681e713ac7aec57e--frabjous-chaja-3be2ec.netlify.app/", // Corrigido: link envolto em aspas
    },
    {
      title: "Bikcraft",
      description: "Design & Development",
      imgUrl: projImg2,
      link: "https://fantastic-maamoul-13a39e.netlify.app/",
    },
    {
      title: "ApiPokedx",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://api-pokedex-gilt.vercel.app/", // Corrigido: adição da chave `link`
    },
    {
      title: "Animais - Fantasticos",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "https://animaisfantastico01.netlify.app/",
    },
    {
      title: "Rick and Morty - jogo da Memoria",
      description: "Design & Development",
      imgUrl: projImg5,
      link: "https://classy-gecko-2629c4.netlify.app/", // Corrigido: link envolto em aspas
    },
  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}> {/* Substituído size por xs */}
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Aqui abaixo está alguns dos projetos feitos por mim, onde eu aprimorei meus conhecimentos em HTML, CSS, JavaScript e React Js</p> {/* Substituir Lorem Ipsum */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
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
                    <Tab.Pane eventKey="second"> {/* Corrigido */}
                      <p>This tab contains detailed information about our process for creating exceptional business startups.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Learn more about our design and development services and how we can help your business grow.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" /> {/* Adicionado alt */}
    </section>
  )
}

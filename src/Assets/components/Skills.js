import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../img/meter1.svg'; // Corrigir a importação das imagens
import meter2 from '../img/meter2.svg';
import meter3 from '../img/meter3.svg';
import colorSharp from '../img/color-sharp.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Algum dos meus conhecimentos<br /></p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Skill 1" />
                                    <h5>Web Developer</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Skill 2" />
                                    <h5>React Js</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Skill 3" />
                                    <h5>Desing</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={'colorSharp'}/>
        </section>
    )
}

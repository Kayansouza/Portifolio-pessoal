import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs"; // Correção da importação
import TrackVisibility from 'react-on-screen'; // Importando TrackVisibility corretamente
import headerimg from '../img/header-img.svg'; // Usando o nome correto para a variável

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]); // Adicionando delta como dependência

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center"> {/* Corrigido de "aligh-items-center" */}
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Bem-vindo ao meu Portfolio</span>
                  <h1>{`Eu sou o Kayan`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Sou um jovem entusiasta de 20 anos, atualmente cursando o segundo semestre de Análise e Desenvolvimento de Sistemas. Profundo interesse em expandir conhecimentos e habilidades na área de desenvolvimento, com foco especial em JavaScript. Determinado a explorar oportunidades que promovam aprendizado contínuo e crescimento profissional. Apaixonado por inovação, estou comprometido em integrar conceitos modernos e práticas ágeis para enfrentar os desafios do mundo da tecnologia. Busco ativamente oportunidades para aplicar e aprimorar minhas habilidades, contribuindo positivamente para projetos e equipes. Pronto para abraçar novos desafios e evoluir constantemente no campo dinâmico do desenvolvimento de software.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <BsArrowRightCircle size={25} /></button> {/* Corrigido para BsArrowRightCircle */}
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerimg} alt="Header Img" /> {/* Usando "headerimg" corretamente */}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

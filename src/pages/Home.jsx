import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../components/Carousel';
import Modal from 'react-bootstrap/Modal';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/EMISSÃO DE BOLETOS .png';
import img5 from '../assets/paulo.png';
import img6 from '../assets/12.png';
import video1 from '../video/tt.mp4'; // Ajuste o caminho conforme necessário
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Links from '../pages/Links';


export const Home = () => {
  const modalContainerStyles = {
    position: 'relative',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
    zIndex: 1050,
    overflow: 'hidden',
  };

  const modalStyles = {
    position: 'relative',
    padding: '20px',
    marginTop: '-25px',
    maxWidth: '1800px',
    width: '70vw',
    height: '800px',
    marginBottom: '20px',
    border: '2px solid #1E90FF',
    borderRadius: '8px',
    color: 'white',
    overflow: 'hidden',
    backgroundColor: 'rgba(30, 144, 255, 0.8)',
  };

  const titleStyles = {
    color: 'white',
    fontSize: '100px',
    paddingLeft: '30%',
  };

  const img = {
    width: '1000px',
    marginLeft: '12%',
  };

  const divpaulo = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '800px',
    marginTop: '15px',
    backgroundImage: `url(${img6})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const textcard = {
    textAlign: 'center',
    fontSize: '18px',
    fontFamily: 'sans-serif',
  };

  const videoStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };

  return (
    <>
      <Header />
      <Carousel style={{ marginTop: '-10px' }}>
        <Carousel.Item>
          <ExampleCarouselImage src={img1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={img2} alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage src={img3} alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div style={modalContainerStyles}>
        <video style={videoStyles} autoPlay loop muted>
          <source src={video1} type="video/mp4" />
        </video>
        <Modal.Dialog style={{ margin: '0 auto' }}>
          <Modal.Body style={modalStyles}>
            <Modal.Title style={titleStyles}>O Cartório</Modal.Title>
            <br />
            <p>
              O 1º Ofício de Protesto de Petrópolis/RJ, sob a responsabilidade do Tabelião/Registrador Paulo Roberto Nunes dos Santos, tem como atribuição exclusiva o Protesto de Títulos. Este serviço visa garantir a autenticidade, publicidade, segurança e eficácia dos atos jurídicos. O cartório é responsável por:
            </p>
            <ul>
              <li>Protocolização, intimação e acolhimento da devolução ou aceite do título;</li>
              <li>Recebimento do pagamento do título e de outros documentos da dívida;</li>
              <li>Lavratura e registro do protesto, ou acatamento da desistência do credor;</li>
              <li>Procedimento das averbações, prestação de informações e fornecimento de certidões relacionadas a todos os atos praticados.</li>
            </ul>
            <p>
              O protesto é o ato formal e solene pelo qual se prova a inadimplência e o descumprimento de obrigações originadas em títulos e outros documentos da dívida, conforme a lei 9.492/97.
            </p>
            <img style={img} src={img4} alt="Emissão de Boletos" />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal.Dialog>
      </div>
      <div style={divpaulo}>
        <Card style={{ width: '30rem' }}>
          <Card.Img variant="top" src={img5} />
          <Card.Body style={{ textAlign: 'center' }}>
            <Card.Title style={textcard}>Paulo Roberto Nunes do Santos</Card.Title>
            <Card.Text style={textcard}>
              Tabelião/Registrador desde o ano 1998. <br />
              Equipe formada por :
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item style={textcard}>Lucas Almeida da Silva - Escrevente Substituto</ListGroup.Item>
            <ListGroup.Item style={textcard}>Pamela da Costa Duarte - Escrevente 2º Substituta</ListGroup.Item>
            <ListGroup.Item style={textcard}>Ingrid Manhardt da Rocha Branco - Escrevente</ListGroup.Item>
            <ListGroup.Item style={textcard}>Adriana Pacheco Nunes do Santos - Escrevente</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <Footer />
    </>
  );
};















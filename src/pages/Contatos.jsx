import React from "react";
import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function Contatos() {
  return (
    <>
      <Header />
      <Card className="text-center" style={{marginTop: '200px', marginBottom: '200px'}}>
        <Card.Header>FALE CONOSCO!</Card.Header>
        <Card.Body>
          <Card.Title>Contatos</Card.Title>
          <Card.Text>
            Telefones - (24) 2243-0532 <br />
            WhatsApp - (24) 99326-3419 <br />
            Email - 1oficioprotestopetro@gmail.com <br />
          </Card.Text>
          <Button variant="primary">
            <a href="https://wa.me/24993263419" style={{ color: 'white', textDecoration: 'none' , marginBottom: '100px'}}>
              Mande uma mensagem!
            </a>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted" >Estamos aqui para ajudar!</Card.Footer>
      </Card>
      <Footer />
    </>
  );
}


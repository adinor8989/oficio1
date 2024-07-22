import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from 'react-bootstrap/Card';

const div = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px',
    marginTop: '5px',
    textAlign: 'center',
  };

export function Links() {
    return (
        <>
        <Header />
        <div style={div}>
        {[
         
          'Danger',
          
        ].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '44rem' }}
            className="mb-2"
          >
            <Card.Header><h1>Sites/Emails Úteis</h1></Card.Header>
            <Card.Body>
              
              <Card.Text><a href='https://www4.tjrj.jus.br/Portal-Extrajudicial/institucional.aspx'> 
                Serviço de Selos - SELEX <br></br>
                e-mail: cgjselex@tjrj.jus.br <br></br>
                Telefone: (21) 3133-3282 / (21) 3133-1941 / (21) 3133-3523 <br></br>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
       </div>
        <Footer />
       
        </>
    );
  }
  

  

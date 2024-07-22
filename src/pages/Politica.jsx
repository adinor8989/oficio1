import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export function Politica() {
  return (
    <>
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
      >
        <a
          href="/1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: '200px',
            marginBottom: '20px',
            fontSize: '16px',
            color: '#007bff',
            textDecoration: 'none'
          }}
        >
          Documento PDF sobre o a Encarragada de Dados.
        </a>
        <a
          href="/2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginBottom: '600px',
            fontSize: '16px',
            color: '#007bff',
            textDecoration: 'none'
          }}
        >
          Documento PDF sobre a Política de Privacidade.
        </a>
      </div>
      <Footer />
    </>
  );
}



import React from 'react';
import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export function Localizacao() {
  return (
    <div className="App">
      <Header />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.832129050843!2d-43.17852682391379!3d-22.510480723829147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9908018b7b775b%3A0x573174aa6972c923!2sCart%C3%B3rio%201%C2%BA%20Of%C3%ADcio%20de%20Protesto%20de%20Petr%C3%B3polis!5e0!3m2!1spt-BR!2sbr!4v1721419083245!5m2!1spt-BR!2sbr"
        width="800"
        height="600"
        style={{ border: '0' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </div>
  );
}

  
  
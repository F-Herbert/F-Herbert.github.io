import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="hero-main">
      <header id="about">
        <NavBar />
        <div className="hero-container">
          <h1 className="hero-title">
            Um pouco sobre mim.
          </h1>
          <p>
            Me chamo Felipe Herbert, tenho 27 anos, viciado em animes,
            séries,amante de cachorros grandes e gatos,
            atualmente sou estudante de desenvolvimento Full-Stack na Trybe.
            <br />
            <br />
            Já estando próximo a minha formação,
            busco por oportunidades de iniciar minha
            carreira como desenvolvedor, e adquirir ainda
            mais conhecimento em tecnologias diversas.
          </p>
          <div className="footer-about">
            <Footer />
          </div>
        </div>
      </header>
    </div>
  );
}

export default About;

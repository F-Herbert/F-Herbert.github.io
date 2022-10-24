import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Home() {
  return (
    <main className="App">
      <NavBar />
      <div className="hero">
        <h1>Felipe Herbert</h1>
        <p>
          <strong>
            Front-End Developer
          </strong>
          <br />
          Building websites for the world.
        </p>
      </div>
      <Footer />
    </main>

  );
}

export default Home;

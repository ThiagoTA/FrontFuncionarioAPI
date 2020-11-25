import React from 'react';
import { Link } from 'react-router-dom'

import '../styles/pages/home.css';



function Home() {
    return (
      <>
      
      <header>
          <h1>Funcionários API</h1>
      </header>

        <div id="page-home">
          <div className="content-wrapper">

            <main>
              <h2>Funcionário</h2>
              <Link to="/Registrando" className="enter-app">
              <button>Cadastrar</button>
              </Link>
            </main>

          </div>
        </div>
      </>   
    );
}

export default Home;


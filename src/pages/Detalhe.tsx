import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/detalhe.css'

function Detalhe() {
    return (
        <>
        
        <header> 
          <h1>Funcionários API</h1>
        </header>
  
          <div id="page-detalhe">
            <div className="content-wrapper">
  
              <main>
                <h2>Detalhe Funcionário</h2>
                <div>
                    <p>Nome:</p>
                    <strong>Thiago Teixeira</strong>

                    <p>Departamento:</p>
                    <strong>UniFOA</strong>

                    <p>Email:</p>
                    <strong>thiago.teixeirapf@gmail.com</strong>

                    <p>Telefone:</p>
                    <strong>24999110081</strong>

                </div>

                <Link to="/Registrando">
                    <button id='voltar'>Voltar</button>
                </Link>
                
              </main>
  
            </div>
          </div>
        </>   
      );
  }

export default Detalhe;
import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/alterar.css'

function Alterar() {
    return (
        <>
        
        <header>
          <h1>Funcionários API</h1>
        </header>
  
          <div id="page-alterar">
            <div className="content-wrapper">
  
              <main>
                <h2>Alterar Funcionário</h2>
                <div>
                    <p>Nome:</p>
                    <input></input>

                    <p>Função:</p>
                    <input></input>

                    <p>Departamento:</p>
                    <input></input>

                    <p>Email:</p>
                    <input></input>

                    <p>Telefone:</p>
                    <input></input>

                    <p>Fotos:</p>
                    <input></input>
                </div>

                <Link to="/Detalhe">
                    <button id='salvarAlterar'>Salvar</button>
                </Link>

                <Link to="/Registrando">
                    <button id='voltarAlterar'>Voltar</button>
                </Link>
                
              </main>
  
            </div>
          </div>
        </>   
      );
  }

export default Alterar;
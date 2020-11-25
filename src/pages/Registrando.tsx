import { Path } from 'leaflet';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { useParams } from 'react-router-dom';

import '../styles/pages/registrando.css'

interface Funcionario {
    name: string,
    funcao: string,
    departamento: string,
    email: string,
    telefone: number
}

function Registrando() {
    const [funcionario, setFuncionario] = useState<Funcionario>();

    useEffect (() => {
        api.get('funcionarios/').then(response => {
            console.log(response);
        })
    }, []);

    return (
        <>
        
        <header>
          <h1>Funcionários API</h1>
        </header>
        

          <div id="page-registro">
            <div className="content-wrapper">
  
              <main>
                <h2>Registrando Funcionário</h2>
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
                    <button id='salvar'>Salvar</button>
                </Link>

                <Link to="/Detalhe">
                    <button id='detalhe'>Detalhe</button>
                </Link>

                <Link to="/Alterar">
                    <button id='alterar'>Alterar</button>
                </Link>

                <Link to="/">
                    <button id='excluir'>Excluir</button>
                </Link>

                
              </main>
  
            </div>
          </div>
        </>   
      );
  }

export default Registrando;
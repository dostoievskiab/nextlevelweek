import React from 'react';
import logo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './style.css';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt=""/>
                </header>
                <main>
                    <h1>Qualquer texto aqui</h1>
                    <p>Eu não quero copiar o texto de lá cara kkkk</p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>
                            Cadastre um ponto de coleta
                        </strong>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Home;
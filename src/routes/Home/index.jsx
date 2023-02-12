import React from 'react';
import { Link } from 'react-router-dom';

import Head from '../../components/Head'
// import { Container } from './styles';
import './styles.css'

function Home() {
    return (
    <div className='container-home'>
        <Head title="Home"/>
        
        <div className="containerLinks">
            <div className='container-logo'>
                <a className='logo'>
                    <p>
                        Projeto Squads M3
                    </p>
                </a>
                <p>
                Loja de Informática
                </p>
            </div>

                <div className="Plus">
                    <Link to={`/hardware`}>
                        <div className="Plus--link" aria-label="hardware">
                            <div className="Plus--image-container">
                                <div>
                                    <div className="Plus--title">
                                        <p>HARDWARE</p>
                                    </div>
                                    <img alt="" className="Plus--image Plus--hover-image" src="https://i.gifer.com/4LWh.gif"/>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/perifericos`}>
                        <div className="Plus--link" aria-label="perifericos">
                            <div className="Plus--image-container">
                                <div>
                                    <div className="Plus--title">
                                        <p>PERIFÉRICOS</p>
                                    </div>
                                    <img alt="" className="Plus--image Plus--hover-image" src="https://media.giphy.com/media/DyqPAnuAklAXe/giphy.gif"/>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/smartphones`}>
                        <div className="Plus--link" aria-label="smartphones">
                            <div className="Plus--image-container">
                                <div>
                                    <div className="Plus--title">
                                        <p>SMARTPHONES</p>
                                    </div>
                                    <img alt="" className="Plus--image Plus--hover-image" src="https://media.giphy.com/media/l4KigDk35mBdez6TK/giphy.gif"/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
    </div>
);
}

export default Home;
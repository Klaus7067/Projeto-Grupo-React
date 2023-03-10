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
                        Gamer House
                    </p>
                </a>
                <br />
                <p className='conteudo_P'>
                Bem-vindo à Gamer House, o lugar perfeito para jogadores apaixonados
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
                                    <img alt="" className="Plus--image Plus--hover-image" src="https://s.zst.com.br/cms-assets/2021/02/o-que-e-hardware-1-.jpg"/>
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
                                    <img alt="" className="Plus--image Plus--hover-image" src="https://as1.ftcdn.net/v2/jpg/02/85/90/44/1000_F_285904463_52tKiXp592qUhmg24eS3f4k1kGQSji3f.jpg"/>
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
                                    <img alt="" className="Plus--image Plus--hover-image" src="https://tm.ibxk.com.br/2019/12/16/16144954939212.jpg?ims=1120x420"/>
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
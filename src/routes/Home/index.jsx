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
                        CineArt
                    </p>
                </a>
                <p>
                Site de filmes e series
                </p>
            </div>

                <div className="Plus">
                    <Link to={`/terror`}>
                        <div className="Plus--link" aria-label="terror">
                            <div className="Plus--image-container">
                                <div>
                                    {/* <img alt="" className="Plus--image" src="https://raw.githubusercontent.com/fernandorussie/banco-imagens/main/4.png?token=GHSAT0AAAAAAB5DCUCR2HPLHDAKKFJUXEMUY6KWM7A"/> */}
                                    <div className="Plus--title">
                                        <p>TERROR</p>
                                    </div>
                                    <img alt="" className="Plus--image Plus--hover-image" src="https://i.gifer.com/4LWh.gif"/>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/acao`}>
                        <div className="Plus--link" aria-label="acao">
                            <div className="Plus--image-container">
                                <div>
                                    {/* <img alt="" className="Plus--image" src="https://raw.githubusercontent.com/fernandorussie/banco-imagens/main/1.png?token=GHSAT0AAAAAAB5DCUCQTTSBT6DPQBLTVLCEY6KWNDQ"/> */}
                                    <div className="Plus--title">
                                        <p>AÇÃO</p>
                                    </div>
                                    <img alt="" className="Plus--image Plus--hover-image" src="https://media.giphy.com/media/DyqPAnuAklAXe/giphy.gif"/>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/comedia`}>
                        <div className="Plus--link" aria-label="comedia">
                            <div className="Plus--image-container">
                                <div>
                                    {/* <img alt="" className="Plus--image" src="https://raw.githubusercontent.com/fernandorussie/banco-imagens/main/3.png?token=GHSAT0AAAAAAB5DCUCROLCJQNFFXUTQWOHMY6KWNAQ"/> */}
                                    <div className="Plus--title">
                                        <p>COMÉDIA</p>
                                    </div>
                                    <img alt="" className="Plus--image Plus--hover-image" src="https://media.giphy.com/media/l4KigDk35mBdez6TK/giphy.gif"/>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/drama`}>
                        <div className="Plus--link" aria-label="drama">
                            <div className="Plus--image-container">
                                <div>
                                    {/* <img alt="" className="Plus--image" src="https://raw.githubusercontent.com/fernandorussie/banco-imagens/main/2.png?token=GHSAT0AAAAAAB5DCUCQBW67EE2XWDTLBU3KY6KWNBQ"/> */}
                                    <div className="Plus--title">
                                        <p>DRAMA</p>
                                    </div>
                                    <img alt="" className="Plus--image Plus--hover-image" src="https://i.pinimg.com/originals/0d/79/74/0d797480fe068e816a7da792121ef2f3.gif"/>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={`/romance`}>
                        <div className="Plus--link" aria-label="romance">
                            <div className="Plus--image-container">
                                <div>
                                    {/* <img alt="" className="Plus--image" src="https://raw.githubusercontent.com/fernandorussie/banco-imagens/main/5.png?token=GHSAT0AAAAAAB5DCUCRCK6L7IMXXMSCV5LSY6KWM5Q"/> */}
                                    <div className="Plus--title">
                                        <p>ROMANCE</p>
                                    </div>
                                    <img alt="" className="Plus--image Plus--hover-image" src="https://media.giphy.com/media/Q5QohuzIBsMRSySbha/giphy.gif"/>
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
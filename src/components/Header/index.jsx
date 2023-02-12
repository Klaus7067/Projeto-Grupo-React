import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import './header.css'

function Header() {
    return ( 
        <div>
            <header>
                    <Link to={'/'}><img src={logo} alt="Logo"></img></Link>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/terror`}>Terror</Link>
                    </li>
                    <li>
                        <Link to={'/comedia'}>Comédia</Link>
                    </li>
                    <li>
                        <Link to={'/romance'}>Romance</Link>
                    </li>
                    <li>
                        <Link to={'/acao'}>Ação</Link>
                    </li>
                    <li>
                        <Link to={'/drama'}>Drama</Link>
                    </li>
                    <li>
                        <Link className="btn-add" to={'/adiciona'}>Adicionar Filme</Link>
                    </li>
                </ul>
            </header>
        </div>
     );
}

export default Header;
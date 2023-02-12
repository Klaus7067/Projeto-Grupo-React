import { Link } from "react-router-dom";
import logo from '../../assets/computador.png'
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
                        <Link to={`/hardware`}>Hardware</Link>
                    </li>
                    <li>
                        <Link to={'/perifericos'}>Perifericos</Link>
                    </li>
                    <li>
                        <Link to={'/smartphones'}>Smartphones</Link>
                    </li>
                    <li>
                        <Link className="btn-add" to={'/adiciona'}>Adicionar Produto</Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;
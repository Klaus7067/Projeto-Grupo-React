import { Link } from "react-router-dom";

import './footer.css'

function Footer() {
    return ( 
        <div>
            <footer>
                <ul class="wrapper">
                    <a href="https://github.com/fernandorussie" target="_blank" rel="noopener noreferrer">
                        <li class="icon facebook">
                            <span class="tooltip">Fernando</span>
                            <span></span>
                        </li>
                    </a>
                    <a href="https://github.com/vtbrgt" target="_blank" rel="noopener noreferrer">
                    <li class="icon twitter">
                        <span class="tooltip">Vitor</span>
                        <span><i class="fab fa-twitter"></i></span>
                    </li>

                    </a>
                    <a href="https://github.com/millenakeli" target="_blank" rel="noopener noreferrer">
                    <li class="icon instagram">
                        <span class="tooltip">Milena</span>
                        <span><i class="fab fa-instagram"></i></span>
                    </li>

                    </a>
                    <a href="https://github.com/LoboMurilo" target="_blank" rel="noopener noreferrer">
                    <li class="icon twitter">
                        <span class="tooltip">Murilo</span>
                        <span><i class="fab fa-twitter"></i></span>
                    </li>

                    </a>
                    <a href="https://github.com/azuosss" target="_blank" rel="noopener noreferrer">
                    <li class="icon instagram">
                        <span class="tooltip">Iury</span>
                        <span><i class="fab fa-instagram"></i></span>
                    </li>

                    </a>
                </ul>
            </footer>
        </div>
     );
}

export default Footer;
import './footer.css'
function Footer() {
    return ( 
        <div>
            <footer>
                <ul class="wrapper">
                    <a href="https://github.com/juanjpf" target="_blank" rel="noopener noreferrer">
                        <li class="icon facebook">
                            <span class="tooltip">Juan</span>
                            <span></span>
                        </li>
                    </a>
                    <a href="https://github.com/Klaus7067" target="_blank" rel="noopener noreferrer">
                    <li class="icon twitter">
                        <span class="tooltip">Rian</span>
                        <span><i class="fab fa-twitter"></i></span>
                    </li>

                    </a>
                    <a href="https://github.com/luansilva92" target="_blank" rel="noopener noreferrer">
                    <li class="icon instagram">
                        <span class="tooltip">Luan</span>
                        <span><i class="fab fa-instagram"></i></span>
                    </li>

                    </a>
                    <a href="https://github.com/thiagomaximo94" target="_blank" rel="noopener noreferrer">
                    <li class="icon twitter">
                        <span class="tooltip">Thiago</span>
                        <span><i class="fab fa-twitter"></i></span>
                    </li>
                    </a>
                </ul>
            </footer>
        </div>
     );
}

export default Footer;
import './footer.css'
function Footer() {
    return ( 
        <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#">our services</a></li>
                        <li><a href="#">privacy policy</a></li>
                        <li><a href="#">affiliate program</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">shipping</a></li>
                        <li><a href="#">returns</a></li>
                        <li><a href="#">order status</a></li>
                        <li><a href="#">payment options</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>online shop</h4>
                    <ul>
                        <li><a href="#">watch</a></li>
                        <li><a href="#">bag</a></li>
                        <li><a href="#">shoes</a></li>
                        <li><a href="#">dress</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>GitHub</h4>
                    <div class="social-links">
                        <a href="https://github.com/thiagomaximo94" className='icon' target="_blank" rel="noopener noreferrer">Thiago</a>
                        <a href="https://github.com/luansilva92" className='icon' target="_blank" rel="noopener noreferrer">Luan</a>
                        <a href="https://github.com/Klaus7067" className='icon' target="_blank" rel="noopener noreferrer">Rian</a>
                        <a href="https://github.com/juanjpf" className='icon' target="_blank" rel="noopener noreferrer">Juan</a>
                    </div>
                </div>
            </div>
        </div>
   </footer>
     );
}

export default Footer;
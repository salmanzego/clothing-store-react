import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="logo col-md-6 col-12">
                        <h2>Godope.</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Ab temporibus reiciendis quidem quia culpa sapiente magnam adipisci minus similique,
                            facere est, atque quis deserunt? Neque laborum harum maxime sapiente eum?</p>
                    </div>
                    <div className="pages col-md-3 col-12">
                        <p>Pages</p>
                        <ul>
                            <a href="/"><li>Home</li></a>
                            <a href="/"><li>Shop</li></a>
                            <a href="/"><li>Cart</li></a>
                            <a href="/"><li>Orders</li></a>
                            <a href="/"><li>Profile</li></a>
                        </ul>
                    </div>
                    <div className="contact col-md-3 col-12">
                        <p>Contact</p>
                        <ul>
                            <a href="/"><li><FontAwesomeIcon icon="fa-brands fa-youtube" />Youtube</li></a>
                            <a href="/"><li><FontAwesomeIcon icon="fa-brands fa-instagram" />Instagram</li></a>
                            <a href="/"><li><FontAwesomeIcon icon="fa-brands fa-facebook" />Facebook</li></a>
                            <a href="/"><li><FontAwesomeIcon icon="fa-solid fa-square-phone"/>Phone</li></a>
                            <a href="/"><li><FontAwesomeIcon icon="fa-solid fa-envelope" />contact@godope.com</li></a>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p>&#169; All rights reserved by Godope. </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
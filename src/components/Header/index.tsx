import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';

export function Header() {

    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Rocketshoes" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>
                        items
                    </span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    );
};

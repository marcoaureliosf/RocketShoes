import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import { Container, Cart } from './styles';
import { useCart } from '../../hooks/useCart';

export function Header() {
    const { cart } = useCart();
    const cartSize = cart.length

    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Rocketshoes" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>
                        {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
                    </span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    );
};

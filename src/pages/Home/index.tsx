import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export function Home() {

    return (
        <ProductList>
            <li>
                <img src="" alt="" />
                <strong>Title</strong>
                <span>R$ 100,00</span>
                <button
                    type="button"
                >
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    );
};

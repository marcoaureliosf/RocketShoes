import { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { Product } from '../../types';

import { useCart } from '../../hooks/useCart';

import { ProductList } from './styles';
import { api } from '../../services/api';

interface CartItemsAmount {
    [key: number]: number;
}

export function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    const { addProduct, cart } = useCart();

    const cartItemsAmount = cart.reduce((sumAmount, product) => {
        const newSumAmount = { ...sumAmount };
        newSumAmount[product.id] = product.amount;

        return newSumAmount;
    }, {} as CartItemsAmount)

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get<Product[]>('/products');

            setProducts(response.data);
        }

        loadProducts();
    }, []);

    function handleAddProduct(id: number) {
        addProduct(id)
    }

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.title}</span>
                    <button
                        type="button"
                        onClick={() => handleAddProduct(product.id)}
                    >
                        <div>
                            <MdAddShoppingCart size={16} color="#FFF" />
                            {cartItemsAmount[product.id] || 0}
                        </div>

                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
};

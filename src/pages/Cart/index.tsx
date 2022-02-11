import { MdDelete, MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';
import { useCart } from '../../hooks/useCart';

import { Product } from '../../types';

import { Container, ProductTable, Total } from './styles';

export function Cart() {
    const { cart, removeProduct, updateProductAmount } = useCart();

    const cartFormatted = cart.map(product => ({
        ...product,
        priceFormatted: product.price,
        subTotal: product.price * product.amount
    }))

    const total = cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount
    }, 0)

    function handleProductIncrement(product: Product) {
        updateProductAmount({ productId: product.id, amount: product.amount + 1 });
    }

    function handleProductDecrement(product: Product) {
        updateProductAmount({ productId: product.id, amount: product.amount - 1 });
    }

    function handleRemoveProduct(productId: number) {
        removeProduct(productId);
    }

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th aria-label="product image" />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th aria-label="delete icon" />
                    </tr>
                </thead>
                <tbody>
                    {cartFormatted.map(product => (
                        <tr key={product.id}>
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <span>{product.price}</span>
                            </td>
                            <td>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => handleProductDecrement(product)}
                                    >
                                        <MdRemoveCircleOutline size={20} />
                                    </button>
                                    <input
                                        type="text"
                                        value={product.amount}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleProductIncrement(product)}
                                    >
                                        <MdAddCircleOutline size={20} />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>{product.subTotal}</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveProduct(product.id)}
                                >
                                    <MdDelete size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>{total}</strong>
                </Total>
            </footer>
        </Container>
    );
};
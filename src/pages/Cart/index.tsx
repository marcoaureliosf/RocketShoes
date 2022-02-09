import { MdDelete, MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export function Cart() {

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
                    <tr>
                        <td>
                            <img src="" alt="" />
                        </td>
                        <td>
                            <strong>Descrição</strong>
                            <span>R$ 100,00</span>
                        </td>
                        <td>
                            <div>
                                <button
                                    type="button"
                                >
                                    <MdRemoveCircleOutline size={20} />
                                </button>
                                <input
                                    type="text"
                                />
                                <button
                                    type="button"
                                >
                                    <MdAddCircleOutline size={20} />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$ 100,00</strong>
                        </td>
                        <td>
                            <button
                                type="button"
                            >
                                <MdDelete size={20} />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>R$ 100,00</strong>
                </Total>
            </footer>
        </Container>
    );
};

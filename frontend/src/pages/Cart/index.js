import React, { Component } from 'react';

import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { ProductTable, Container, Total } from './styles';

export default class Cart extends Component {
    render() {
        return (
            <Container>
                <ProductTable>
                    <thead>
                        <tr>
                            <th />
                            <th>PRODUTO</th>
                            <th>QTD</th>
                            <th>SUBTOTAL</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRqW2obnZH4QMDIqSLVeNoHX0d7l_8A_CD5eK8DOjZPEyegTEtafMM&usqp=CAc"
                                    alt=""
                                />
                            </td>
                            <td>
                                <strong>Redmi Note 8</strong>
                                <span>1400,00</span>
                            </td>
                            <td>
                                <div>
                                    <button type="button">
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="#2193f6"
                                        />
                                    </button>
                                    <input type="number" readOnly value={2} />
                                    <button type="button">
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#2193f6"
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>R$ 2800,00</strong>
                            </td>
                            <td>
                                <button type="button">
                                    <MdDelete size={20} color="#2193f6" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </ProductTable>
                <footer>
                    <button>Finalizar pedido</button>
                    <Total>
                        <span>TOTAL</span>
                        <strong>1920,80</strong>
                    </Total>
                </footer>
            </Container>
        );
    }
}

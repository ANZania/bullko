import React from 'react';
import styled from 'styled-components';
import { priceCounter } from '../Order/PriceCounter';

const TotalPriceWrapper = styled.div`
    width: 200px;
    height: 50px;
    font-weight: 700;
    font-size: 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &>span {
        text-align: right;
    }

`;

const Price = styled.section`

    &>p {
        font-weight: 400;
        font-size: 24px;
        text-align: right;
    }
`;



export function TotalPrice( order ) {

    return (
        <TotalPriceWrapper>
            <span>Стоимость </span>

            <Price>
                <p>{priceCounter( order ).toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</p>
            </Price>
        </TotalPriceWrapper>
    )
};
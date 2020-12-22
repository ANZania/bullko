import React from 'react';
import styled from 'styled-components';
import promoImg from '../../img/promoImg.png';
import wave from '../../img/wave.svg';


// STYLES


const PromoStyled = styled.div`
    width: 100%;
    height: 500px;
    background-image: url(${promoImg});
    background-attachment: fixed
`;

const PromoText = styled.h1`
    text-align: center;
    padding-top: 15%;

    color: #ffffff; 
    font-weight: 300;
    font-size: 44px;
`;

const WaveBlock = styled.div`
    width: 100%;
    height: 235px;
    background-image: url(${wave});
`;

const MenuText = styled.h2`
    text-align: center;
    padding-top: 12%;

    color: #000000;
    font-weight: 700;
    font-size: 36px;
`;


// COMPONENT


export const Promo = () => (
    <PromoStyled id="0">
        <PromoText>
            Доставка бургеров в Санкт-Петербурге
        </PromoText>
        <WaveBlock>
            <MenuText>
                МЕНЮ
            </MenuText>
        </WaveBlock>
    </PromoStyled>
);
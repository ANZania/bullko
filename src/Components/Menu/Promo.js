import React from 'react';
import styled from 'styled-components';
import promoImg from '../../img/promo.png';
import wave from '../../img/wave.svg';


// STYLES


const PromoStyled = styled.div`
    width: 100%;
    height: 500px;
    background-image: url(${promoImg});
    background-attachment: fixed;
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: left -200px top -500px;
    background-color: #160000;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const PromoText = styled.h1`
    text-align: right;
    width: 700px;
    padding-top: 15%;

    color: #ffffff; 
    font-weight: 700;
    font-size: 56px;
    position: absolute;
    right: 60px;
    top: -50px
`;

const WaveBlock = styled.div`
    width: 100%;
    height: 235px;
    background-image: url(${wave});
    position: relative;
    top: 3px;
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
            Сочные бургеры из фермерских продуктов
        </PromoText>
        <WaveBlock>
            <MenuText>
                МЕНЮ
            </MenuText>
        </WaveBlock>
    </PromoStyled>
);
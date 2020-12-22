import React from 'react';
import styled from 'styled-components';
import DBMenu from '../DB';
import { ItemList } from './ItemList';


// STYLES 

const MenuStyled = styled.main`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: #ffffff;
`;

const ItemBlock = styled.div`
    width: 70%;
`;

const ItemTitle = styled.h3`
    padding-top: 3%;
    display: flex;
    justify-content: flex-start;
    color: #000000;
    font-weight: 400;
    font-size: 30px;
`;


// COMPONENT


export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <ItemBlock>
            <ItemTitle>Бургеры</ItemTitle>
            <ItemList 
                itemList={DBMenu.burger}
                setOpenItem={setOpenItem} />
            <ItemTitle>Напитки</ItemTitle>
            <ItemList 
                itemList={DBMenu.drinks}
                setOpenItem={setOpenItem} />
            <ItemTitle>Закуски</ItemTitle>
            <ItemList 
                itemList={DBMenu.snacks}
                setOpenItem={setOpenItem} />
        </ItemBlock>
    </MenuStyled>
);

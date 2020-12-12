import React from 'react';
import styled from 'styled-components';


// STYLES 


const ItemListStyled = styled.ul`
    padding-top: 26px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Item = styled.li`
    margin-top: 25px;
    width: 32%;
    height: 190px;
    transition: 0.5s;
    background-size: cover;
    background-image: ${(props) => `url(${props.img})`};
    filter: brightness(0.7);
    border-radius: 5px;
    &:hover {
        filter: brightness(1);
        transition-duration: 0.5s;
        transform: scale(0.9, 0.9);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    }
`;

const ItemName = styled.p`
    color: #ffffff;
    font-weight: 400;
    font-size: 16;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
`;

const ItemPrice = styled.p`
    color: #ffffff;
    font-weight: 100;
    font-size: 16;
    padding-top: 5px;
    padding-left: 10px;
    padding-right: 10px;    
`;


// COMPONENT

export const ItemList = ({ itemList, setOpenItem }) => (
    <ItemListStyled>
        {itemList.map( item => (
            <Item 
                key={item.id}
                img={item.img}
                onClick={() => setOpenItem(item.name)}>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>{item.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</ItemPrice>

            </Item>
        ))}
    </ItemListStyled>
)
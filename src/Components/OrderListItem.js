import React from 'react';
import styled from 'styled-components';
import Delete from '../img/delete.png';

const OrderListItemBlock = styled.li`
    margin-bottom: 15px; 
    padding: 10px 10px;
    min-height: 50px;
    width: 98%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;    
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, .1);
`;

const DeleteIcon = styled.button`
    width: 16px;
    height: 16px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${Delete});
    background-position: center;
    transition-duration: 0.5s;         
    outline: none; 
    cursor: pointer;  

    &:hover {
        transform: scale(0.9, 0.9);        
        transition-duration: 0.5s;        
        border-color: transparent;
    };

    &:focus {
        transform: scale(0.9, 0.9);        
        transition-duration: 0.5s;
        box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, .2);
    }
`;

export const OrderListItem = () => (
    <OrderListItemBlock>
        <span>GBurger</span>
        <span>2</span>
        <span>450 p</span>
        <DeleteIcon/>
    </OrderListItemBlock>
);
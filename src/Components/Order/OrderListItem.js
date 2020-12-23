import React from 'react';
import styled from 'styled-components';
import Delete from '../../img/delete.png';
import { addRubSign } from '../Functions/addRubSign';
import { countPrice } from '../Functions/countPrice';

const OrderListItemBlock = styled.li`
    margin-bottom: 15px; 
    padding: 10px 10px;
    min-height: 50px;
    width: 98%;
    border-radius: 5px;    
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, .1);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ItemWrapper = styled.section`
    width: 80%; 
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export const OrderListItem = ({ order }) => (
    <OrderListItemBlock>
        <ItemWrapper>
            <span>{ order.name }</span>
            <span>{ order.count }</span>
            <span>{ addRubSign(countPrice( order )) }</span>
        </ItemWrapper>
        <DeleteIcon/>
    </OrderListItemBlock>
);
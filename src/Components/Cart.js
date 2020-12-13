import React from 'react';
import { slideInRight } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const Animation = keyframes`${slideInRight}`;

const Overlay = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Modal = styled.div`
    width: 500px;
    height: 100%; 
    background-color: #ffffff;
    overflow: hidden;    
    animation: 0.5s ${Animation};
`;


export const Cart = () => {
    return (
        <Overlay id="overlay" >
            <Modal>
            </Modal>
        </Overlay>
    )
};
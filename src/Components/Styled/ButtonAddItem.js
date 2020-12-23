import styled from 'styled-components';

const ButtonAddItem = styled.button`
    background-color: #fff;
    color: #000;
    height: 50px;
    width: 220px;
    border-radius: 5px;
    outline: none;

    transition: 0.25s;
    
    &:hover { 
        border-color: #000000;
        color: #fff;
        box-shadow: inset 18em 0 0 0 rgba(0, 0, 0, 1);
    };

    &:active {
        transform: scale(0.95, 0.95);
    };

`;

export {ButtonAddItem};
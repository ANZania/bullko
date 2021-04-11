import styled from 'styled-components';

const ButtonAddItem = styled.button`
    background-color: #C60000;
    color: #fff;
    font-size: 18px;
    height: 50px;
    width: 220px;
    border-radius: 5px;
    border-color: #C60000;
    outline: none;

    transition: 0.25s;
    
    &:hover { 
        background-color: #740000;
        border-color: #740000;
        color: #fff;
        
    };

    &:active {
        transform: scale(0.95, 0.95);
    };

`;

export {ButtonAddItem};
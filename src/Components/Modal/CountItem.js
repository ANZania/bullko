import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
    width: 120px;
    height: 50px;
    font-weight: 700;
    font-size: 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CountBox = styled.div`
    width: 100%;    
    flex-grow: 1;
    font-size: 12px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    &>.button-count-min {
        border-radius: 3px 0px 0px 3px;
    }

    &>.button-count-max {
        border-radius: 0px 3px 3px 0px;
    }
`;

const CountInput = styled.input`
    border-radius: 0px;
    -moz-appearance: textfield;
    flex-grow: 0.4;

    &::-webkit-outer-spin-button, ::-webkit-inner-spin-button  {    
        -webkit-appearance: none;
    }
`;

const ButtonCount = styled.button`
    flex-grow: 0.3;
    background-color: #0000;

    outline: none;
    transition: 0.25s;
    
    &:hover { 
        background-color: #000;
        color: #fff;
    };

    &:active {
        transform: scale(0.95, 0.95);
    };

    &span {
        text-align: center;
        width: 100%;
    }

    
`;

export function CountItem({ count, setCount, onChange }) {

    return (
        <CountWrapper>
            <span>Количество</span>

            <CountBox>
                <ButtonCount className='button-count-min' disabled={count <= 1} onClick={() => setCount( count - 1 )} ><span>-</span></ButtonCount>
                <CountInput type='number' min='1' max='50' value={count < 1 ? 1 : count} onChange={onChange}/>
                <ButtonCount className='button-count-max' disabled={count >= 50} onClick={ () => setCount( count + 1 ) } ><span>+</span></ButtonCount>
            </CountBox>
        </CountWrapper>
    )
};
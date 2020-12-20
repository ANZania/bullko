import React from 'react';
import styled from 'styled-components';
import logoImg from '../img/logo.svg';
import personImg from '../img/person.svg';
import cartImg from '../img/cart.svg';


// STYLES 


const NavBarStyled = styled.header`
    width: 100%; 
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    position: fixed;
`;

const Logo = styled.a`
    padding: 20px 50px;
    cursor: pointer;  
`;

const NavBarLinks = styled.div`
    display: flex;
    width: 22%;
    padding: 20px 50px;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
`;

const LinkBlock = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    cursor: pointer;        
    transition-duration: 0.5s;    

    &:hover {
        transform: scale(1.1, 1.1);        
        transition-duration: 0.5s;
    };
`;

const LinkImg = styled.div`
    padding: 0px 10px;
`;
 
const listenScrollEvent = e => {
    
    if (window.scrollY > 400) {
        NavBarStyled.componentStyle.rules += `background-color: 'yellow';`;
    } else {
        NavBarStyled.style = {backgroundColor: 'yellow'};
    }
}

// COMPONENT


export const NavBar = ({ scrollPosition, setScrollPosition }) => (
    <NavBarStyled onClick={() => listenScrollEvent()}>
        <Logo href="#0">
            <img src={logoImg} alt="logo"/>
        </Logo>
        <NavBarLinks>
            <LinkBlock>
                <LinkImg>
                    <img src={personImg} alt="enter icon"/>
                </LinkImg>
                <p className="NavBarText enterLink"><a>Войти</a></p>
            </LinkBlock>
            <LinkBlock> 
                <LinkImg>
                    <img src={cartImg} alt="cart icon"/>
                </LinkImg>     
                <p className="NavBarText cartLink"><a>Корзина</a></p>
            </LinkBlock>
        </NavBarLinks>
    </NavBarStyled>
);
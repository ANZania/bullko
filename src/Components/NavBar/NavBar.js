import React from 'react';
import styled from 'styled-components';
import logoImg from '../../img/logo/logo.svg';
import personImg from '../../img/person.svg';
import cartImg from '../../img/cart.svg';


// STYLES 


const NavBarStyled = styled.header`
    width: 100%; 
    height: 60px;
    display: flex;
    justify-content: space-between;
    background-color: #000000;
    position: fixed;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 100;
`;

const Logo = styled.a`
    cursor: pointer;
    height: 100%;
    width: 132px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 3%;
    background-image: url(${logoImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    
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
 
// COMPONENT


export const NavBar = ({ isCartOpened, setCartOpened }) => {
    const toggleCart = () => {
        if (isCartOpened) {
            setCartOpened(null);
        } else {
            setCartOpened('cart');
        }
    };
    return(
        <NavBarStyled>
            <Logo href="#0"></Logo>
            <NavBarLinks>
                <LinkBlock>
                    <LinkImg>
                        <img src={personImg} alt="enter icon"/>
                    </LinkImg>
                    <p className="NavBarText enterLink"><a>Войти</a></p>
                </LinkBlock>
                <LinkBlock onClick={toggleCart}>
                    <LinkImg>
                        <img src={cartImg} alt="cart icon"/>
                    </LinkImg>
                    <p className="NavBarText cartLink"><a>Корзина</a></p>
                </LinkBlock>
            </NavBarLinks>
        </NavBarStyled>
    )
};
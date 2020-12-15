import React from 'react';
import { fadeIn, fadeOut } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { ButtonAddItem } from '../Components/ButtonAddItem';

const Animation = keyframes`${fadeIn}`;

const Overlay = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: 0.5s ${Animation};
`;

const Modal = styled.div`
    width: 600px;
    height: 600px; 
    background-color: #ffffff;
    border-radius: 5px;
    overflow: hidden;
`;

const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
`;

const HeadContent = styled.section`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MainText = styled.h2`
    padding-left: 30px;
    font-weight: 400;
    font-size: 30px;
`;

const Price = styled.h2`
    padding-right: 30px;
    font-weight: 400;
    font-size: 30px;
`;

const DescriptionContent = styled.section`
    padding: 0px 30px;
    height: 100px;
    overflow: hidden;
`;

const Description = styled.p`
    font-weight: 300;
    font-size: 18px;
`;

const OptionContent = styled.section`
    padding: 0px 30px;
    height: auto;
    overflow: hidden;
`;

const OptionalItems = styled.ul``;

const Amount = styled.input``;

export const ModalItem = ({ openItem, setOpenItem }) => {

    const closeModal = (event) => {
        if ((event.target.id === "overlay")||(event.target.closest(".button-add"))) {
            setOpenItem(null);
        }
    }

    if (!openItem) {
        return null;
    } else {
        return (
            <Overlay id="overlay" onClick={closeModal}>
                <Modal>
                    <Banner img={openItem.img}/>
                    <HeadContent>
                        <MainText>
                            {openItem.name}
                        </MainText>
                        <Price>
                            {openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}
                        </Price>
                    </HeadContent>
                    <DescriptionContent>
                        <Description>
                        {openItem.description}
                        </Description>
                    </DescriptionContent>
                    <OptionContent>
                        <OptionalItems>
                            
                        </OptionalItems>
                    </OptionContent>
                    <ButtonAddItem className="button-add" onClick={closeModal}>
                        Добавить в корзину
                    </ButtonAddItem>
                </Modal>
            </Overlay>
        )
    };
};
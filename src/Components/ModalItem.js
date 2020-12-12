import React from 'react';
import styled from 'styled-components';

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
`;

const Modal = styled.div`
    width: 600px;
    height: 600px; 
    background-color: #ffffff;
    border-radius: 5px;
`;

const Banner = styled.div`
    height: 200px;
    width: 100%;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;

`;

export const ModalItem = ({ openItem, setOpenItem }) => {

    const closeModal = (event) => {
        if (event.target.id === "overlay") {
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
                </Modal>
            </Overlay>
        )
    };
};
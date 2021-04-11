import React from 'react';
import { slideInRight } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import { ButtonAddItem } from '../Styled/ButtonAddItem';
import { OrderListItem } from '../Order/OrderListItem';
import { countPrice } from '../Functions/countPrice';
import { addRubSign } from '../Functions/addRubSign';

const Animation = keyframes`${slideInRight}`;

const Overlay = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .7);
    z-index: 20;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 100%; 
    background-color: #ffffff;
    overflow: hidden;    
    animation: 0.5s ${Animation};
`;

const HeadContent = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    font-weight: 400;
    font-size: 30px;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, .1);
`;

const OrderContent = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px 10px 30px;
`;

const OrderList = styled.ul`
    overflow-y: auto;
    overflow-x: visible;
`;

const Footer = styled.section`
    display: flex;
    height: 80px;
    padding-left: 30px;
    justify-content: flex-start;
    align-items: center;
`;

const EmptyOrderList = styled.p`
    font-weight: 300;
    text-align: center;
    width: 100%;
    padding: 50px 0px;
`;

const Total = styled.div` 
`;

export const Cart = ({  isCartOpened, setCartOpened, orders, setOrders, setOpenItem }) => {

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice( index, 1 );
        setOrders(newOrders);
    }

    const totalPriceCount = orders.reduce(( result, order ) => (countPrice(order) + result), 0)

    const closeModal = (event) => {
        if (event.target.id === "CartOverlay") {
            setCartOpened(null);
        } else if (event.target.closest(".button-add")) {
            const timer = setTimeout(() => {
                setCartOpened(null);
                clearTimeout(timer);
            }, 200);
        }
    };

    if (!isCartOpened) {
        return null;
    } else {
        return (
            <Overlay id="CartOverlay" onClick={closeModal} >
                <Modal>
                    <HeadContent>
                        <p>Ваш заказ</p>
                    </HeadContent>
                    <OrderContent>
                        {orders.length ? 
                            <OrderList>
                                { orders.map( (order, index) => <OrderListItem
                                    order={order}
                                    key={index}
                                    index={index}
                                    deleteItem={deleteItem}
                                    setOpenItem={setOpenItem}
                                /> ) }
                            </OrderList> :
                            <EmptyOrderList>
                                Список заказов пуст
                            </EmptyOrderList>}        
                        <Total>
                            <span>Итого: </span>
                            <span>{addRubSign(totalPriceCount)}</span>
                        </Total>
                    </OrderContent>
                    <Footer>
                        <ButtonAddItem className="button-add" onClick={closeModal}>
                            Оформить заказ
                        </ButtonAddItem>
                    </Footer>
                </Modal>
            </Overlay>
        )
    };
};
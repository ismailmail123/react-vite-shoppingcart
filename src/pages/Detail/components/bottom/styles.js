import styled from "styled-components";

export const Container = styled.div `
  position: fixed;
  bottom: 0;
  width: 450px;
`;

export const ContainerChackout = styled.div `
  background-color: rgb(243, 241, 241);
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;
export const Checkbox = styled.div `
  display: flex;
`;
export const Checkout = styled.div `
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  text-align: center;    
`;
export const CheckoutText = styled.div `
  display: flex;
  width: 100%;
  
`;
export const BuyButton = styled.button `
  background-color: rgb(201, 153, 31);
  border-radius: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  height: 50px;
  font-size: 18px;
`;
export const CartButton = styled.button `
  background-color: rgb(201, 153, 31);
  border-radius: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  height: 50px;
  border-right: 1px solid black;
  img{
    width: 30px;
  }
`;
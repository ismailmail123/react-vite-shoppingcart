import styled from "styled-components";

export const Container = styled.div `
  position: fixed;
  bottom: 0;
  width: 450px;
`;

export const ContainerChackout = styled.div `
  background-color: rgb(243, 241, 241);
  display: flex;
  justify-content: end;
  align-items: center;
  box-sizing: border-box;
  height: 55px;
`;
export const Total = styled.div `
  display: flex;
  justify-content: end;
  align-items: end;
  flex-direction: column;
  line-height: 8px;
`;
export const Checkout = styled.div `
  display: flex;
  align-items: center;
  width: 200px;
  height: 42px;
  text-align: center;
`;

export const Price = styled.div `
  font-size: 17px;
  color: rgb(201, 153, 31);
  font-weight: bold;
  margin-left: 5px;
  display: flex;
  align-items: center;
`;
export const BtnCheckout = styled.button `
  background-color: rgb(201, 153, 31);
  border-radius: 0;
  height: 100%;
  width: 300px;
  margin: 0 0 0 8px;
  height: 55px;
`;
export const Text = styled.div `
  padding: 0;
  margin-bottom: 15px;
`;
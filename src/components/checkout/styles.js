import styled from "styled-components";

export const Container = styled.div `
  position: fixed;
  bottom: 0;
  width: 450px;
`;

export const ContainerChackout = styled.div `
  background-color: rgb(243, 241, 241);
  display: flex;
  justify-content: ${(props) =>
    props.order && props.selectall ? "space-between" : "end"};
  // background-color: ${({ order }) => (order ? "green" : "red")};
  align-items: center;
  box-sizing: border-box;
`;
export const Checkbox = styled.div `
  display: flex;
  p {
    margin-right: 55px;
  }
`;
export const Checkout = styled.div `
  display: flex;
  align-items: center;
  width: 323px;
  height: 42px;
  text-align: center;
`;
export const CheckoutText = styled.div `
display: flex;
    width: 100%;
    button{
      font-size: 17px;
    color: rgb(201, 153, 31);
    font-weight: bold;
    margin-left: 5px;
    
`;
export const Price = styled.div `
  font-size: 17px;
  color: rgb(46, 124, 46);
  font-weight: bold;
  margin-left: 5px;
  display: flex;
  align-items: center;
`;
export const BtnCheckout = styled.button `
  background-color: rgb(46, 124, 46);
  border-radius: 0;
  height: 100%;
  width: 300px;
  margin: 0;
  height: 55px;
`;
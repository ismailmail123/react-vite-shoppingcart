import styled from "styled-components";

export const ContainerList = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  box-sizing: border-box;
  /* background-color: aqua; */
  width: 100%;
`;
export const Content = styled.div `
  display: flex;
  width: 100%;
  img {
    width: 100px;
    margin-left: 10px;
  }
`;
export const ProductContent = styled.div `
  display: flex;
  width: 100%;
`;
export const ProductText = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 10px;
  justify-content: center;
  p {
    display: block;
    margin-block-start: 0;
    font-weight: bold;
  }
`;

export const ButtonProduct = styled.div `
  display: flex;
  height: 30px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  // background-color: red;
  p {
    width: 100%;
    text-align: center;
  }
`;

export const PButtonProduct = styled.div `
  width: 100%;
  text-align: center;
`;

export const Price = styled.div `
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PPrice = styled.div `
  font-size: 15px;
  text-align: center;
  color: red;
`;

export const Component = styled.div `
  display: flex;
  justify-content: end;
  height: 20px;
  button {
    padding: 2px;
    background-color: rgb(201, 153, 31);
    font-size: 10px;
    margin-left: 10px;
    font-weight: bold;
  }
`;

export const Quantity = styled.div `
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 20px;
    padding: 5px;
    border-radius: 50%;
    border: 1px solid black;
    font-weight: bold;
    font-size: 15px;
    margin: 3px;
  }
`;
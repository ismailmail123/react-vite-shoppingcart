import styled from "styled-components";


export const ContainerList = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  box-sizing: border-box;
  
  width: 100%;
`;
export const Title = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  border-bottom: 1px solid black;
  width: 100%;
`;

export const Content = styled.div `
  display: flex;
  width: 100%;
  
`;
export const ProductContent = styled.div `
  display: flex;
  width: 100%;
  img{
    width: 50px;
  }
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
    margin-left: 10px;
    // background-color: red;
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
export const Buttonpay = styled.div `
  display: flex;
  align-items: center;
  height: 30px;
  background-color: rgb(46, 124, 46);;
  justify-content: center;
  width: 100%;
  border-radius: 10px; 
  color: white;
  padding: 5px;
  cursor: pointer;
  font-size: 10px;
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
  text-align: start;
  font-weight: bold;
  color:rgb(46, 124, 46);
`;

export const Component = styled.div `
  display: flex;
  justify-content: end;
  align-items: end;
  flex-direction: column;gap: 10px;
  
`;
export const Date = styled.div `
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: column;
  font-size: 12px
`;

export const ButtonHide = styled.button `
 background-color: whiteSmoke;
 background-color: #e8eaec;
 border: 1px solid blue;
`;

export const ContainerButton = styled.div `
 display: flex;
 justify-content: center;
  align-items: center;
  background:rgb(46, 124, 46);
  width: 450px
`;

export const ContainerUp = styled.div `
 display: flex;
 justify-content: center;
  align-items: center;
  flex-direction: column;
  // margin-top: -100px;
  background-color: white;
`;
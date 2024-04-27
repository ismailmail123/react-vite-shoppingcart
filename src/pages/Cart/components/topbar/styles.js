import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  height: 56px;
`;

export const Title = styled.h1 `
  font-size: 17px;
  color: #000000;
  margin-left: 10px
`;

export const ButtonCart = styled.div `
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 20px;
    width: 20px;
  }
`;

export const Content = styled.div `
  display: flex;
  align-items: center;
  width: 195px;
  height: 32 px;
`;
export const ButtonDel = styled.div `
  width: 42px;
  height: 32px;
  border-radius: 16px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: rgb(46, 124, 46);
  cursor: pointer;
`;
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
  margin-left: 10px;
`;

export const ButtonCart = styled.div `
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    height: 20px;
    width: 20px;
  }
`;
export const Buttonhome = styled.div `
  width: 32px;
  height: 32px;
  border-radius: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div `
  display: flex;
  align-items: center;
  width: 170px;
  height: 32 px;
`;
export const Backhome = styled.div `
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer: cursor;
`;
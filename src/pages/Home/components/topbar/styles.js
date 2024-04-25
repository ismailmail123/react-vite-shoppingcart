import styled from 'styled-components';

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
  font-size: 20px;
  color: #000000;
`;

export const ButtonCart = styled.div `
  width: 40px;
  height: 40px;
  border-radius: 16px;
  // background-color: #F2F2F2;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 20px;
    width: 20px;
  }
`;

export const Containerlength = styled.div `
  font-size: 10px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  background-color: blue;
  padding: 0 3px;
  border-radius: 50%;
`;
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  box-sizing: border-box;
  height: 56px;
`;

export const Title = styled.h1`
  font-size: 20px;
  color: #000000;
`;

export const ButtonCart = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #F2F2F2;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 20px;
    width: 20px;
  }
`;
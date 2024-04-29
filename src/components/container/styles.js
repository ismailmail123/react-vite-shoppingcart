import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex: 1;
  justify-content: center;
  min-height: 100vh;
  background-color: #cfcfcf;
`;

export const Content = styled.div `
  background-color: #fdfdfd;
  width: 450px;
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;
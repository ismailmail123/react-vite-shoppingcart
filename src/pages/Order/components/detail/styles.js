import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  box-sizing: border-box;
  /* background-color: aqua; */
  width: 100%;
`;
export const Detail = styled.div `
  display: flex;
  flex-direction: column;
  align-items: star;
  line-height: 1.7;
  margin-bottom: 60px;
`;
export const DetailText = styled.div `
  display: flex;
  align-items: star;
  justify-content: space-between;
  width: 420px;
`;
export const Title = styled.div `
  font-size: 12px;
  font-weight: bold;
`;
export const Text = styled.div `
  font-size: 10px;
`;
export const Price = styled.div `
  font-size: 10px;
  font-height: 5px;
`;
export const TotalPrice = styled.div `
  font-size: 13px;
  font-weight: bold;
`;
export const Total = styled.div `
  font-size: 13px;
  font-weight: bold;
`;
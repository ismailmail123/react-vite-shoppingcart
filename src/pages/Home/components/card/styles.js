import styled from "styled-components";

export const Container = styled.div `
  background-color: #fff;
  border-radius: 8px;
  width: 46%;
  margin: 0 2%;
  margin-bottom: 12px;
  overflow: hidden;
  box-shadow: 0px 3px 5px -2px rgba(0, 0, 0, 0.1);
  margin-top: auto;
`;

export const Image = styled.img `
  width: 100%;
  height: 136px;

  object-fit: contain;
`;

export const WrapDesc = styled.div `
  padding: 8px;
`;

export const ImageLimited = styled.img `
  width: 100%;
  height: 136px;
  position: relative;
  object-fit: contain;
  // z-index: -1;
  opacity: 0.5;
`;

export const Label = styled.p `
  font-size: 16px;
  color: #000000;
  font-weight: 500;
  margin: 0;
`;

export const Desc = styled.p `
  font-size: 10px;
  color: #000000;
  margin: 0;
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-line-clamp: 3;
`;

export const Price = styled.p `
  font-size: 15px;
  font-weight: bold;
  color: rgb(46, 124, 46);
  margin: 0;
`;
export const ButtonAdd = styled.button `
  font-size: 12px;
  backgroun-color: green;
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 10px
  padding: 0;
  img{
    width: 30px;
  }
`;
export const Containerbtn = styled.div `
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
`;
export const LabelStock = styled.div `
  // display: flex;
  // justify-content: end;
  // align-items: center;
  width: 100%;
  height: 136px;
  z-index: 1;
  background-color: transparent;
  opacity: 0.2;
  // positon: absolute;
  margin-bottom: -136px;
`;
export const Limited = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  font-weignt: black;
  z-index: 2;
  color: blue;
  height: 136px;
  img{
    width: 100%;
  height: 136px;
  }
`;
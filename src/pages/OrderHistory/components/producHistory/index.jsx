// import "./style.css";

import Image from "../../../../assets/react.svg";
import { ButtonProduct, Date, Buttonpay, Component, ContainerList, Content, PPrice, Price, ProductContent, ProductText} from "./styles";
const index = () => {
  return (
    <ContainerList>
      <Content>
        <ProductContent>
          <img src={Image} />
          <ProductText>
            <p>Laptop Asus</p>
            <ButtonProduct>
              <Price>
                <PPrice>Rp. 5.000</PPrice>
              </Price>
              <Component>
                <Buttonpay>Beli Lagi</Buttonpay>
                <Date>Tanggal Checkout : 23/04/2024 </Date>
              </Component>
            </ButtonProduct>
          </ProductText>
        </ProductContent>
      </Content>
    </ContainerList>
  );
};

export default index;

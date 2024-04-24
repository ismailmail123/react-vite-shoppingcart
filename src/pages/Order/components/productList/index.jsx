// import "./style.css";

import Image from "../../../../assets/react.svg";
import { ButtonProduct, Quantity, Component, ContainerList, Content, PPrice, Price, ProductContent, ProductText} from "./styles";
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
                <Quantity>x 2 </Quantity>
              </Component>
            </ButtonProduct>
          </ProductText>
        </ProductContent>
      </Content>
    </ContainerList>
  );
};

export default index;

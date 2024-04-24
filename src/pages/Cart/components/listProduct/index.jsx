// import "./style.css";

import Image from "../../../../assets/react.svg";
import { ButtonProduct, Component, ContainerList, Content, PButtonProduct, PPrice, Price, ProductContent, ProductText, Quantity } from "./styles";
const index = () => {
  return (
    <ContainerList>
      <input type="checkbox" />
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
                <Quantity>
                  <button>+</button>
                  <PButtonProduct>8</PButtonProduct>
                  <button>-</button>
                </Quantity>
                <button className="btn-remove">Remove</button>
              </Component>
            </ButtonProduct>
          </ProductText>
        </ProductContent>
      </Content>
    </ContainerList>
  );
};

export default index;

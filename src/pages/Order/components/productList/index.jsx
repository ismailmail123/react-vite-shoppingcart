// import "./style.css";

import Image from "../../../../assets/react.svg";
import useCartStore from "../../../../store/useCartStore";
import { ButtonProduct, Quantity, Component, ContainerList, Content, PPrice, Price, ProductContent, ProductText} from "./styles";
// import Detail from '../detail';

const index = ({order}) => {

console.log('ini order', order)

  return (
    <>
    <ContainerList>
      <Content>
        <ProductContent>
          <img src={order.image} />
          <ProductText>
            <p>Laptop Asus</p>
            <ButtonProduct>
              <Price>
                <PPrice>{new Intl.NumberFormat("id-ID", {
                  style: 'currency',
                  currency: "IDR",
                }).format(order.price)
                }</PPrice>
              </Price>
              <Component>
                <Quantity>x {order.quantity} </Quantity>
              </Component>
            </ButtonProduct>
          </ProductText>
        </ProductContent>
      </Content>
    </ContainerList>
    </>
  );
};

export default index;

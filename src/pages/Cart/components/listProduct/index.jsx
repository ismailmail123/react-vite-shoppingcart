// import "./style.css";

import Image from "../../../../assets/react.svg";
import useCartStore from "../../../../store/useCartStore";
import { ButtonProduct, Component, ContainerList, Content, PButtonProduct, PPrice, Price, ProductContent, ProductText, Quantity, TextEmpty } from "./styles";


const index = ({ product }) => {


  const { increaseQuantity, decreaseQuantity, removeItemFromCart } = useCartStore();

  const onIncreaseQuantity = (productId) => {
    increaseQuantity(productId);
  };

  const onDecreaseQuantity = (productId) => {
    decreaseQuantity(productId);
  };

  const onRemoveItem = (productId) => {
    removeItemFromCart(productId);
  };
  const {orderHistory} = useCartStore()
  console.log("ini product", orderHistory)
  return (
    <>
      <ContainerList >
        <input type="checkbox" />
        <Content>
          <ProductContent>
            <img src={product.image} />
            <ProductText>
              <p>{product.title}</p>
              <ButtonProduct>
                <Price>
                  <PPrice>{new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(product.price)}</PPrice>
                </Price>
                <Component>
                  <Quantity>
                    <button
                      onClick={() => onIncreaseQuantity(product.id)}
                      title="Increase quantity"
                    >+</button>
                    <PButtonProduct>{product.quantity}</PButtonProduct>
                    <button
                      onClick={() => onDecreaseQuantity(product.id)}
                      title="Decrease Quantity"
                    >-</button>
                  </Quantity>
                  <button
                    onClick={() => onRemoveItem(product.id)}
                    title="Remove item from cart"
                    className="btn-remove">Remove</button>
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

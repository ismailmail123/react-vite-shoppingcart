// import "./style.css";

// import Image from "../../../../assets/react.svg";
import { useState } from "react";
import Checkout from "../../../../components/checkout";
import useCartStore from "../../../../store/useCartStore";
import {
  ButtonProduct,
  Component,
  ContainerList,
  Content,
  PButtonProduct,
  PPrice,
  Price,
  ProductContent,
  ProductText,
  Quantity,
} from "./styles";
import Topbar from "../topbar";

const index = ({ product }) => {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeItemFromCart,
    orderHistory,
    selectedProducts,
    toggleSelectedProduct,
    selectAllProducts
  } = useCartStore();

  const [isChecked, setIsChecked] = useState(true);

  const onIncreaseQuantity = (productId) => {
    increaseQuantity(productId);
  };

  const onDecreaseQuantity = (productId) => {
    if(!isChecked){
      alert("Prodak dalam keadaan terseleksi")
    }else{
    decreaseQuantity(productId);
    }
  };

  const onRemoveItem = (productId) => {
    if(!isChecked){
      alert("Prodak dalam keadaan terseleksi")
    }else{
    removeItemFromCart(productId);
  }
  };
  // const { orderHistory } = useCartStore();
  console.log("ini product", orderHistory);

  // const selectedProducts = useCartStore((state) => state.selectedProducts);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    toggleSelectedProduct(product);
  };
  

  console.log("handle selected", selectedProducts);

 
  const handleSelectAllChange = () => {
    const allProductsSelected = selectedProducts.length === product.length;
    if (allProductsSelected) {
      selectAllProducts(product);
    } else {
      Object.keys(product).forEach(() => {
        toggleSelectedProduct(product);
      });
    }
  };


  return (
    <>
      {/* <Topbar /> */}
      <ContainerList>
        <input
          type="checkbox"
          checked={selectedProducts.includes(product)}
          onChange={() => handleCheckboxChange(product.id)}
        />
        <Content>
          <ProductContent>
            <img src={product.image} />
            <ProductText>
              <p>{product.title}</p>
              <ButtonProduct>
                <Price>
                  <PPrice>
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(product.price)}
                  </PPrice>
                </Price>
                <Component>
                  <Quantity>
                    <button
                      onClick={() => onIncreaseQuantity(product.id)}
                      title="Increase quantity"
                    >
                      +
                    </button>
                    <PButtonProduct>{product.quantity}</PButtonProduct>
                    <button
                      onClick={() => onDecreaseQuantity(product.id)}
                      title="Decrease Quantity"
                    >
                      -
                    </button>
                  </Quantity>
                  <button
                    onClick={() => onRemoveItem(product.id)}
                    title="Remove item from cart"
                    className="btn-remove"
                  >
                    Remove
                  </button>
                </Component>
              </ButtonProduct>
            </ProductText>
          </ProductContent>
        </Content>
      </ContainerList>
      <Checkout
        product={product}
        selectall={true}
        order={true}
        handleSelectAllChange={handleSelectAllChange}
      />
    </>
  );
};

export default index;

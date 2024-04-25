import ListProduct from "./components/listProduct";
import { Container, TextEmpty } from "./styles";
import useCartStore from "../../store/useCartStore";
import Topbar from "./components/topbar";
import { Checkout } from "../../components/checkout/styles";
// import { useState } from "react";
const index = () => {
  const { 
    cartItems,
    //  selectedProducts, 
    //  toggleSelectedProduct
     } = useCartStore();
  // const [isChecked, setIsChecked] = useState(true);

  // const handleCheckboxChange = () => {
  //   setIsChecked(!isChecked);
  //   toggleSelectedProduct(cartItems);
  // };  
  // console.log("handle sel", selectedProducts);

  // const handleSelectAllChange = () => {
  //   const allProductsSelected = selectedProducts.length === product.length;
  //   if (allProductsSelected) {
  //     selectedProducts(cartItems);
  //   } else {
  //     Object.keys(cartItems).forEach((key) => {
  //       toggleSelectedProduct(cartItems[key].id);
  //     });
  //   }
  // };
  console.log("ini cart items", cartItems)

  return (
    <>
      <Container>
        <Topbar />
        {cartItems.length === 0 ? (
          <>
          <TextEmpty>
            <p>Data cart masih kosong</p>
          </TextEmpty>
          </>
        ) : (
          cartItems.map((item, index) => (
            <ListProduct key={index} product={item} 
            // handleCheckboxChange={handleCheckboxChange}
            />
          ))
        )}

      </Container>
    </>
  );
};

export default index;

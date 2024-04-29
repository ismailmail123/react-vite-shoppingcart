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

  // Membuat objek untuk menyimpan item-order berdasarkan kategori
  // const categories = {};

  // // Mengelompokkan item-order berdasarkan kategori
  // cartItems.forEach(item => {
  //   // Menentukan kategori (misalnya, kategori bisa diambil dari properti item.category)
  //   const category = item.category; // Gantilah dengan properti yang sesuai
  //   // Mengecek apakah kategori sudah ada dalam objek categories
  //   if (!categories[category]) {
  //     // Jika belum ada, inisialisasikan dengan array kosong
  //     categories[category] = [];
  //   }
  //   // Memasukkan item ke dalam kategori yang sesuai
  //   categories[category].push(item);
  // });

  console.log("ini cart items", cartItems);

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
            <ListProduct
              key={index}
              product={item}
              // handleCheckboxChange={handleCheckboxChange}
            />
          ))
        )}
      </Container>
    </>
  );
};

export default index;

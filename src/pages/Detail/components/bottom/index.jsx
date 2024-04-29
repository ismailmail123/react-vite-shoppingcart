// /* eslint-disable react-hooks/rules-of-hooks */
// // import "./style.css";
// import { useNavigate } from "react-router-dom";
// import { BuyButton, CartButton, Checkout, Container, ContainerChackout } from "./styles";
// import Icon from '../../../../assets/icons/cart.svg'
// import useCartStore from "../../../../store/useCartStore";

// const index = ({data}) => {
  
//   const {selectedProducts} = useCartStore();
//   const { addCartItems } = useCartStore();
//   const onAddToCart = () => {
//     addCartItems(data);
//     alert("data berhasil ditambahkan")
//     navigate("/cart")
//     //  console.log(listProduct)
//   };

//   const onToCart = () => {
//     selectedProducts(data);
//     // alert("data berhasil ditambahkan")
//     navigate("/order")
//     //  console.log(listProduct)
//   };

//   const navigate = useNavigate();
//   return (
//   <Container>
//       <ContainerChackout>
//         <Checkout>
//             <CartButton onClick={onAddToCart}>
//               <img src={Icon} alt="" />
//             </CartButton>
//           <BuyButton onClick={onToCart}>Beli Sekarang</BuyButton>
//         </Checkout>
//       </ContainerChackout>
//     </Container>
//   )
// };

// export default index;

import { useNavigate } from "react-router-dom";
import { BuyButton, CartButton, Checkout, Container, ContainerChackout } from "./styles";
import Icon from '../../../../assets/icons/cart.svg'
import useCartStore from "../../../../store/useCartStore";

const Index = ({data}) => { // Ubah dari index menjadi Index (penulisan yang benar untuk nama komponen)

  const { addCartItems, toggleSelectedProduct} = useCartStore(); // Mengambil fungsi addCartItems dan selectedProducts dari useCartStore
  // const selectedProducts = useCartStore((state) => state. selectedProducts);
  const navigate = useNavigate();

  const onAddToCart = () => {
    addCartItems(data); // Menambahkan produk ke dalam keranjang belanja
    alert("Data berhasil ditambahkan ke keranjang belanja");
    navigate("/cart"); // Navigasi ke halaman keranjang belanja
  };

  // const onToCart = () => {
  //   toggleSelectedProduct(data); // Menambahkan produk ke dalam produk yang dipilih untuk pembelian sekarang
  //   navigate("/order"); // Navigasi ke halaman pemesanan
  // };
  // console.log("ini data yyy", data)

  return (
    <Container>
      <ContainerChackout>
        <Checkout>
          <CartButton onClick={onAddToCart}>
            <img src={Icon} alt="" />
          </CartButton>
          {/* <BuyButton
           onClick={onToCart}
           >Beli Sekarang</BuyButton> */}
        </Checkout>
      </ContainerChackout>
    </Container>
  );
};

export default Index;

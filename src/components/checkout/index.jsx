/* eslint-disable react-hooks/rules-of-hooks */
// import "./style.css";
import { useNavigate } from "react-router-dom";
import { BtnCheckout, Checkbox, Checkout, CheckoutText, Container, ContainerChackout, Price } from "./styles";
import useCartStore from "../../store/useCartStore";


const getTotal = (cartItem) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItem.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  return { totalPrice, totalQuantity };
};


const index = ({ selectAll, order }) => {

  const { cartItems } = useCartStore();

  const { totalQuantity, totalPrice } = getTotal(cartItems);
  const { addOrder } = useCartStore();
  const onAddToOrder = () => {
    addOrder(cartItems);
    alert("data berhasil ditambahkan")
    navigate("/order")
    //  console.log(listProduct)
  }
  const navigate = useNavigate();
  return (
    <Container selectAll={selectAll} order={order}>
      <ContainerChackout>
        {
          selectAll && (
            
            <Checkbox>
              <input type="checkbox"></input>
              <p>semua</p>
            </Checkbox>
          )
        }
        {
          order && (
        <Checkout>
          <CheckoutText>
            <p>Total</p>
            <Price>{new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(totalPrice)}</Price>
          </CheckoutText>
          <BtnCheckout onClick={onAddToOrder}>Checkout ({totalQuantity})</BtnCheckout>
        </Checkout>
       )
      }
      {
          !order && (
        <Checkout>
          <CheckoutText>
            <p>Total</p>
            <Price>{new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(totalPrice)}</Price>
          </CheckoutText>
          <BtnCheckout onClick={() =>navigate('/riwayat')}>Buat pesanan</BtnCheckout>
        </Checkout>
       )
      }
        
      </ContainerChackout>
    </Container>
  )
};

export default index;

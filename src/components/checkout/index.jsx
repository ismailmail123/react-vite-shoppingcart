/* eslint-disable react-hooks/rules-of-hooks */
// import "./style.css";
import { useNavigate } from "react-router-dom";
import Modal from '../modal'
import {
  BtnCheckout,
  Checkbox,
  Checkout,
  CheckoutText,
  Container,
  ContainerChackout,
  Price,
} from "./styles";
import useCartStore from "../../store/useCartStore";
import { useState } from "react";

const getTotal = (cartItem) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItem.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  return { totalPrice, totalQuantity };
};

console.log("ini car Item");

const index = ({ selectall, order, handleSelectAllChange, product }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);
  
  
  const selectedProducts = useCartStore((state) => state.selectedProducts);

  const { totalQuantity, totalPrice } = getTotal(selectedProducts);
  const { addOrder } = useCartStore();
  const onAddToOrder = () => {
    if (selectedProducts.length == 0) {
      alert("belum ada data yang ditambahkan");
    } else {
      setIsOpen(true)
      // addOrder(selectedProducts);
      // alert("data berhasil ditambahkan");
      // navigate("/riwayat");
    }

    //  console.log(listProduct)
  };
  const navigate = useNavigate();

  const handleNavigate = () => {
    if(selectedProducts.length === 0){
      alert("Silahkan pilih beberapa produk")
    }else{
      navigate("/order")
    }
  }


  return (
    <Container selectall={selectall} order={order}>
      <ContainerChackout>
        {selectall && (
          <Checkbox>
            <input
              type="checkbox"
              checked={selectedProducts.length === product.length}
              onChange={handleSelectAllChange}
            ></input>
            <p>semua</p>
          </Checkbox>
        )}
        {order && (
          <Checkout>
            <CheckoutText>
              <p>Total</p>
              <Price>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(totalPrice)}
              </Price>
            </CheckoutText>
            <BtnCheckout onClick={handleNavigate}>
              Checkout ({totalQuantity})
            </BtnCheckout>
          </Checkout>
        )}
        {!order && (
          <Checkout>
            <Modal toggleModal={toggleModal} isOpen={isOpen} />
            <CheckoutText>
              <p>Total</p>
              <Price>
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(totalPrice)}
              </Price>
            </CheckoutText>
            <BtnCheckout onClick={onAddToOrder} >
              Buat pesanan
            </BtnCheckout>
          </Checkout>
        )}
      </ContainerChackout>
    </Container>
  );
};

export default index;

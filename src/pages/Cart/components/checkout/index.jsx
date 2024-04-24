/* eslint-disable react-hooks/rules-of-hooks */
// import "./style.css";
import { useNavigate } from "react-router-dom";
import { BtnCheckout, Checkbox, Checkout, CheckoutText, Container, ContainerChackout, Price } from "./styles";

const index = () => {

  const navigate = useNavigate();
  return (
  <Container>
      <ContainerChackout>
        <Checkbox>
          <input type="checkbox"></input>
          <p>semua</p>
        </Checkbox>
        <Checkout>
          <CheckoutText>
            <p>Total</p>
            <Price>Rp. 5.000</Price>
          </CheckoutText>
          <BtnCheckout onClick={() => navigate("/order")}>Checkout</BtnCheckout>
        </Checkout>
      </ContainerChackout>
    </Container>
  )
};

export default index;

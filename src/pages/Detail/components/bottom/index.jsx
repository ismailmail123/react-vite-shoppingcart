/* eslint-disable react-hooks/rules-of-hooks */
// import "./style.css";
import { useNavigate } from "react-router-dom";
import { BuyButton, CartButton, Checkout, Container, ContainerChackout } from "./styles";
import Icon from '../../../../assets/icons/cart.svg'

const index = () => {

  const navigate = useNavigate();
  return (
  <Container>
      <ContainerChackout>
        <Checkout>
            <CartButton onClick={() => navigate("/cart")}>
              <img src={Icon} alt="" />
            </CartButton>
          <BuyButton onClick={() => navigate("/order")}>Beli Sekarang</BuyButton>
        </Checkout>
      </ContainerChackout>
    </Container>
  )
};

export default index;

import { Container, Title, ButtonCart, Containerlength } from "./styles";
import cartIcon from "../../../../assets/icons/cart.svg";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../../../store/useCartStore";

const index = () => {
  const { cartItems } = useCartStore();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Title>Toko Online</Title>
        <ButtonCart onClick={() => navigate("/cart")}>
          <img src={cartIcon} />
          {cartItems.length === 0 ? (
            ""
          ) : (
            <Containerlength>{cartItems.length}</Containerlength>
          )}
        </ButtonCart>
      </Container>
    </>
  );
};

export default index;

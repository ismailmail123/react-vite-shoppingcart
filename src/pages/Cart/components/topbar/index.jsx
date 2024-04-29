/* eslint-disable react-hooks/rules-of-hooks */
import { Container, Title, ButtonCart, Content, ButtonDel } from "./styles";
import backIcon from "../../../../assets/icons/back.svg";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../../../store/useCartStore";

const index = () => {
  const selectedProducts = useCartStore((state) => state.selectedProducts);
  const removeSelectedProduct = (productId) => {
    useCartStore.setState((state) => ({
      selectedProducts: state.selectedProducts.filter(
        (product) => product.id !== productId
      ),
    }));
  };

  const handleRemove = () => {
    selectedProducts.forEach((product) => {
      removeSelectedProduct(product.id);
    });
  };
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <ButtonCart onClick={() => navigate(-1)}>
          <img src={backIcon} />
        </ButtonCart>
        <Title> Keranjang Saya</Title>
      </Content>
      <ButtonDel onClick={handleRemove}>Ubah</ButtonDel>
    </Container>
  );
};

export default index;

/* eslint-disable react-hooks/rules-of-hooks */
import { Container, Title, ButtonCart, Content } from "./styles";
import backIcon from "../../../../assets/icons/back.svg";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <ButtonCart onClick={() => navigate(-1)}>
          <img src={backIcon} />
        </ButtonCart>
        <Title> Checkout</Title>
      </Content>
    </Container>
  );
};

export default index;

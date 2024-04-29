/* eslint-disable react-hooks/rules-of-hooks */
// import "./style.css";
import { useNavigate } from "react-router-dom";
import {
  BtnCheckout,
  Total,
  Text,
  Checkout,
  Container,
  ContainerChackout,
  Price,
} from "./styles";

const index = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ContainerChackout>
        <Total>
          <Text>Total Pembayaran</Text>
          <Price>Rp. 115.000</Price>
        </Total>
        <Checkout>
          <BtnCheckout onClick={() => navigate("/riwayat")}>
            Buat Pesanan
          </BtnCheckout>
        </Checkout>
      </ContainerChackout>
    </Container>
  );
};

export default index;

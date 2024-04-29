import {
  Container,
  Detail,
  DetailText,
  Price,
  Text,
  Title,
  Total,
  TotalPrice,
} from "./styles";

const index = () => {
  return (
    <Container>
      <Detail>
        <DetailText>
          <Title>Rincian Pembayaran</Title>
        </DetailText>
        <DetailText>
          <Text>Subtotal untuk Produk</Text>
          <Price>Rp. 50.000</Price>
        </DetailText>
        <DetailText>
          <Text>Subtotal Pengiriman</Text>
          <Price>Rp. 60.000</Price>
        </DetailText>
        <DetailText>
          <Text>Biaya Penanganan</Text>
          <Price>Rp. 5.000</Price>
        </DetailText>
        <DetailText>
          <Total>Total Pembayaran</Total>
          <TotalPrice>Rp. 115.000</TotalPrice>
        </DetailText>
      </Detail>
    </Container>
  );
};

export default index;

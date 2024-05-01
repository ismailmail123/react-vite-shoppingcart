import { ContainerDetail, TextTittle, Detail, Text } from "./styles";

const index = ({ orderHistoryItem }) => {
  return (
    <ContainerDetail>
      <TextTittle>Detail Pembayaran</TextTittle>
      <Detail>
        <Text>Total Produk</Text>
        <Text>{orderHistoryItem.totalQuantity}</Text>
      </Detail>
      <Detail>
        <Text>Total Harga</Text>
        <Text>
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(orderHistoryItem.totalPrice)}
        </Text>
      </Detail>
      <Detail>
        <Text>Total Pembayaran</Text>
        <Text>
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(orderHistoryItem.paymentAmount)}
        </Text>
      </Detail>
      <Detail>
        <Text>Sisa pembayaran</Text>
        <Text>
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(orderHistoryItem.reminder)}
        </Text>
      </Detail>
    </ContainerDetail>
  );
};

export default index;

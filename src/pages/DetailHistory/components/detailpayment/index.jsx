import { ContainerDetail, TextTittle, Detail, Text } from "./styles";

const index = ({ orderHistoryItem }) => {
  return (
    <ContainerDetail>
      <TextTittle>Detail of Payment</TextTittle>
      <Detail>
        <Text>Total Quantity</Text>
        <Text>{orderHistoryItem.totalQuantity}</Text>
      </Detail>
      <Detail>
        <Text>Total Price</Text>
        <Text>
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(orderHistoryItem.totalPrice)}
        </Text>
      </Detail>
      <Detail>
        <Text>Total Payment</Text>
        <Text>
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(orderHistoryItem.paymentAmount)}
        </Text>
      </Detail>
      <Detail>
        <Text>Total Reminder</Text>
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

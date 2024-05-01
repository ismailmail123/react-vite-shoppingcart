import useCartStore from "../../store/useCartStore";
import { useParams } from "react-router-dom";
import { Title, Container } from "./styles";

import Topbar from "./components/topbar";
import Details from "./components/details";
import DetailPayment from "./components/detailpayment";

const Index = () => {
  const { orderHistory } = useCartStore();
  const { index } = useParams();
  // Pastikan orderHistory adalah array dan memiliki setidaknya satu elemen
  if (!Array.isArray(orderHistory) || orderHistory.length === 0) {
    return (
      <>
        <Topbar />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            fontWeight: "bold",
          }}
        >
          Tidak ada data order history.
        </div>
        ;
      </>
    );
  }
  // Mengambil data dari orderHistory indeks ke-0
  const orderHistoryItem = orderHistory[index];

  console.log("order history", orderHistory);
  return (
    <>
      <Topbar />
      <Container>
        <Title style={{ borderBottom: "0" }}>Detail Riwayat Order</Title>
        <Title>{orderHistoryItem.timestamp}</Title>
        {orderHistoryItem.order.map((item, index) => (
          <Details
            orderHistoryItem={orderHistoryItem}
            key={index}
            item={item}
          />
        ))}
        <DetailPayment orderHistoryItem={orderHistoryItem} />
      </Container>
    </>
  );
};

export default Index;

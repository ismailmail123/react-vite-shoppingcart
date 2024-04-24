import Topbar from "./components/topbar";
import Checkout from "./components/checkout";
import ListProduct from "./components/listProduct";
import { Container } from "./styles";
const index = () => {
  return (
    <>
      <Container>
        <Topbar />
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <ListProduct />
        <Checkout />
      </Container>
    </>
  );
};

export default index;

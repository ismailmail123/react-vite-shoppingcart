import Topbar from "./components/topbar";
import Checkout from "../../components/checkout";
import ListProduct from "./components/listProduct";
import { Container } from "./styles";
import useCartStore from "../../store/useCartStore";
const index = () => {

  const cartItems = useCartStore(state => state.cartItems)


  return (



    <>
      <Container>
        <Topbar />
        {
          cartItems.map((item, index) => (
            <ListProduct key={index} product={item} />
          ))
        }
        <Checkout selectAll order />
      </Container>
    </>
  );
};

export default index;

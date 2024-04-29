import Topbar from "./components/topbar";
import ProductHistory from "./components/producHistory";
import useCartStore from "../../store/useCartStore";

const index = () => {
  const { orderHistory } = useCartStore();
  console.log("ini product", orderHistory);

  return (
    <>
      <Topbar />
      {orderHistory.map((item, index) => (
        <ProductHistory key={index} index={index} history={item} />
      ))}
    </>
  );
};

export default index;

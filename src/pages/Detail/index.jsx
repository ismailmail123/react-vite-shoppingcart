import Topbar from "./components/topbar";
import ProductDetail from "./components/ProductDetail";
import Bottom from "./components/bottom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const index = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  // useEffect(() => {
  // fetchData(data)
  // },[])

  // const fetcher = async () =>
  //   fetch("https://fakestoreapi.com/products").then((res) => res.json());
  // const { data: products } = useSWR("/products", fetcher);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      console.log(response.data);
      setData(response.data);
    } catch (err) {
      console.log("data error", err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  console.log("ini adalah data", data);

  return (
    <>
      <Topbar />
      <ProductDetail data={data} />
      <Bottom data={data} />
    </>
  );
};

export default index;

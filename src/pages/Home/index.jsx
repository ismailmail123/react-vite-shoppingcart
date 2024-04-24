import Topbar from './components/topbar'
import Card from './components/card'
import { Container } from './styles'
import useSWR from "swr";

import useCartStore from '../../store/useCartStore';

const index = () => {
  // const listProduct = useCartStore(state => state.products)
  const fetcher = async () =>
  fetch("https://fakestoreapi.com/products").then((res) => res.json());
const { data: products} = useSWR("/products", fetcher);


console.log("ini adalah hasil data fetch", products)
  return (
    <>
      <Topbar />
      
      <Container>
      {products?.map (( product, index) => (
          <Card
            key={index}
            product ={product}
          />
        ))}
      </Container>
    </>
  )
};

export default index;
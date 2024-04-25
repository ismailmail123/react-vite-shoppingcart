import Topbar from './components/topbar'
import Card from './components/card'
import { Container } from './styles'
import useSWR from "swr";
import Loading from '../../components/loading'
import { useState } from 'react';

const index = () => {

  const [isLoading, setIsloading] = useState(false)
  // const listProduct = useCartStore(state => state.products)
  const fetcher = async () =>
  fetch("https://fakestoreapi.com/products").then((res) => res.json());
const { data: products} = useSWR("/products", fetcher);


console.log("ini adalah hasil data fetch", products)
  return (
    <>
      <Topbar />
      
      <Container>
      {
      isLoading ? <Loading /> :
      products?.map (( product, index) => (
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
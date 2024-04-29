import Topbar from './components/topbar'
import Card from './components/card'
import { Container } from './styles'
import useSWR from "swr";
import Loading from '../../components/loading'
import { useEffect, useState } from 'react';
import axios from 'axios';
import useCartStore from '../../store/useCartStore';

const index = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsloading] = useState(false)
  // const listProduct = useCartStore(state => state.products)
//   const fetcher = async () =>
//   fetch("https://fakestoreapi.com/products").then((res) => res.json());
// const { data: products} = useSWR("/products", fetcher);
const fetch = async () =>{

  try{
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data)
    console.log("ini data", response)
  }catch (err) {
    console.log("data tidak ditemukan", err)
  }
}

useEffect(() => {
  fetch(products)
}, [])
// const {products} = useCartStore();

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
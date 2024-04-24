
import { Link, useParams } from "react-router-dom";
import { Container, Image, Label, Desc, Price, WrapDesc } from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";
// import useSWR from "swr";
// import { useEffect } from "react";

const index = () => {
  
  // const {id} = useParams()
  const [data, setData] = useState({});
  
  // useEffect(() => {
  // fetchData(data)
  // },[])
  
    // const fetcher = async () =>
    //   fetch("https://fakestoreapi.com/products").then((res) => res.json());
    // const { data: products } = useSWR("/products", fetcher);
  
    async function fetchData () {

      try{
        const response = await axios.get("https://fakestoreapi.com/products")
       
        // console.log(response.data)
        setData(response.data)
      }catch (err) {
        console.log("data error", err)
      }
    }

    useEffect(() => {
      fetchData({});
      
    },[])
  
  return (
    <>
      
          {
            data && data.length > 0 && data.map((item) => (
             
            <Container key={item.id}>
        <Link to={`/detail`}>
              <Image  src={item.image} />
          <WrapDesc>
            <Label key={item.id} >{item.title}</Label>
            <Desc>{item.description}</Desc>
            <Price>{`Rp. ${item.price}`}</Price>
          </WrapDesc>
          </Link>
      </Container>
              
            ))
          }
          
        
    </>
  );
};

export default index;

import {
  Container,
  Image,
  Label,
  Desc,
  Price,
  WrapDesc,
  Rating,
} from "./styles";
// import React from "../../../../assets/react.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const index = () => {
  // const [data, setData] = useState();

  const locale = "id-ID";
  const option = {
    style: "currency",
    currency: "IDR",
  };
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
       
        console.log(response.data)
        setData(response.data)
      }catch (err) {
        console.log("data error", err)
      }
    }

    useEffect(() => {
      fetchData();
      
    },[])
  return (
    <>
      
        {data && data.length >0 && data.slice(0, 1).map((item, index) => (
           
          <>
            <Container> 
              <Image key={index} src={item.image} />
              <WrapDesc>
                <Label>
                  {item.title}
                </Label>
                <Desc>
                  {item.description}
                </Desc>
                <Price>{new Intl.NumberFormat(locale, option).format(
                      item.price)}</Price>
                <Rating>⭐ {item.rating.rate} / 5</Rating>
              </WrapDesc>
               </Container>
            </>
        ))} 
          
      
    </>
  );
};

export default index;

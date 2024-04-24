
import { Link, useNavigate } from "react-router-dom";
import { Container, Image, Label, Desc, Price, WrapDesc, ButtonAdd} from "./styles";
// import { useEffect, useState } from "react";
// import axios from "axios";
import useCartStore from "../../../../store/useCartStore";


const index = ({product}) => {
  const navigate = useNavigate();
  const { addCartItems } = useCartStore();
  const onAddToCart = () => {
    addCartItems(product);
    // alert("data berhasil ditambahkan")
    // navigate("/cart")
  //  console.log(listProduct)
  }
  return (
    <>
    
        <Container >
            <Link to={`/detail`}>
              <Image src={product.image} />

            </Link>
            <WrapDesc>
              <Label>{product.title}</Label>
              <Desc>{product.description}</Desc>
              <Price>{`Rp. ${product.price}`}</Price>
            </WrapDesc>
            <ButtonAdd onClick={onAddToCart}>Tambah</ButtonAdd>
          </Container>
     
    </>
  );
};

export default index;

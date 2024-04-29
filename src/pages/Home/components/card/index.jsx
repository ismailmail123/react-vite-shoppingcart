import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Image,
  Label,
  Desc,
  Price,
  WrapDesc,
  ButtonAdd,
  Containerbtn
} from "./styles";
// import { useEffect, useState } from "react";
// import axios from "axios";
import useCartStore from "../../../../store/useCartStore";
import cartIcon from "../../../../assets/icons/cart.svg";

const index = ({ product }) => {

  const { addCartItems } = useCartStore();
  const onAddToCart = () => {
    addCartItems(product);
    // alert("data berhasil ditambahkan")
    // navigate("/cart")
    //  console.log(listProduct)
  };
  return (
    <>
      <Container>
        <Link to={`/detail/${product.id}`}>
          <Image src={product.image} />
        </Link>
        <WrapDesc>
          <Label>{product.title}</Label>
          <Desc>{product.description}</Desc>
          <Price>{`Rp. ${product.price}`}</Price>
        </WrapDesc>
        <Containerbtn>
          <ButtonAdd onClick={onAddToCart}>
            <img src={cartIcon} alt="Tambah" />
          </ButtonAdd>
        </Containerbtn>
      </Container>
    </>
  );
};

export default index;

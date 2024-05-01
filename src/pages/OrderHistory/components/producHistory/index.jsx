// import "./style.css";

import { useState } from "react";
import Image from "../../../../assets/react.svg";
import useCartStore from "../../../../store/useCartStore";
import {
  Container,
  ButtonProduct,
  // ButtonHide,
  Date,
  Buttonpay,
  Component,
  ContainerList,
  Content,
  PPrice,
  Price,
  ProductContent,
  ProductText,
  // ContainerButton,
  // ContainerUp,
} from "./styles";
import { Link, useNavigate, useParams } from "react-router-dom";

const index = ({ history, index }) => {
  
  const navigate = useNavigate();
  console.log("ini index", index);
  return (
    <>
      <>
        <Container style={{ borderTop: "1px solid black" }}>
          <ContainerList>
            <Content key={index}>
              <ProductContent>
                <img src={history.order[0].image} />
                <ProductText>
                  <p>{history.order[0].title}</p>
                  <ButtonProduct>
                    <Price>
                      <PPrice>
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(history.totalPrice)}
                      </PPrice>
                    </Price>
                    <Component>
                      <Buttonpay
                      onClick={() => navigate(`/detailhistory/${index}`)}
                      >
                        Lihat Detail
                      </Buttonpay>
                      <Date>{history.timestamp}</Date>
                    </Component>
                  </ButtonProduct>
                </ProductText>
              </ProductContent>
            </Content>
          </ContainerList>
        </Container>
      </>
      {/* ))
    } */}
    </>
  );
};

export default index;

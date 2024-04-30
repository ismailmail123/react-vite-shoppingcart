// import "./style.css";

import { useState } from "react";
import Image from "../../../../assets/react.svg";
import useCartStore from "../../../../store/useCartStore";
import {
  Container,
  ButtonProduct,
  ButtonHide,
  Date,
  Buttonpay,
  Component,
  ContainerList,
  Content,
  PPrice,
  Price,
  ProductContent,
  ProductText,
  ContainerButton,
  ContainerUp,
} from "./styles";
import { useNavigate, useParams } from "react-router-dom";

const index = ({ history, index}) => {
  const [showContainerUp, setShowContainerUp] = useState(false);
  const handleOpen = () => setShowContainerUp(!showContainerUp);
  // const {addCartItems} = useCartStore();

  const navigate = useNavigate();
  // const index = useParams();
  // const onAddToOrder = () => {
  //     addCartItems(history.order);
  //     // console.log("data history", history.order)
  //     // alert("silahkan cek dikernjang belanja");
  //     navigate("/cart");
  // };
  // console.log("ini history", history.order[1])
console.log("ini index", index)
  return (
    <>
      {/* {
    history.order.map((item,index) => ( */}
      <>
        <Container style={{borderTop: "1px solid black"}}>
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
                      <Buttonpay onClick={() => navigate(`/detailhistory/${index}`)}>Lihat Detail</Buttonpay>
                      <Date>{history.timestamp}</Date>
                    </Component>
                  </ButtonProduct>
                </ProductText>
              </ProductContent>
            </Content>
          </ContainerList>
          
            {/* <ContainerButton>
              <ButtonHide onClick={handleOpen}>
                {showContainerUp ? "sembunyikan" : "Lihat Detail"}
              </ButtonHide>
            </ContainerButton>
            {showContainerUp && (
  <ContainerUp>
    {history.order.map((item, index) => (
      <>
        <ContainerList open key={index}>
          <Content>
            <ProductContent>
              <img src={item.image} alt={item.title} />
              <ProductText>
                <p>{item.title}</p>
                <ButtonProduct>
                  <Price>
                    <PPrice>
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(item.price)}
                    </PPrice>
                  </Price>
                  <Component>
                    <Date>x {item.quantity}</Date>
                  </Component>
                </ButtonProduct>
              </ProductText>
            </ProductContent>
          </Content>
        </ContainerList>
      </>
    ))}
  </ContainerUp>
)} */}

        </Container>
      </>
      {/* ))
    } */}
    </>
  );
};

export default index;

// import React from 'react';

// const Index = ({ history }) => {
//   // Membuat objek untuk menyimpan item-order berdasarkan kategori
//   const categories = {};

//   // Mengelompokkan item-order berdasarkan kategori
//   history.order.forEach(item => {
//     // Menentukan kategori (misalnya, kategori bisa diambil dari properti item.category)
//     const category = item.category; // Gantilah dengan properti yang sesuai
//     // Mengecek apakah kategori sudah ada dalam objek categories
//     if (!categories[category]) {
//       // Jika belum ada, inisialisasikan dengan array kosong
//       categories[category] = [];
//     }
//     // Memasukkan item ke dalam kategori yang sesuai
//     categories[category].push(item);
//   });

//   return (
//     <>
//       {/* Iterasi melalui setiap kategori */}
//       {Object.entries(categories).map(([category, items], index) => (
//         <div key={index}>
//           <h2>{category}</h2>
//           {/* Render item-item dalam kategori */}
//           {items.map((item, idx) => (
//             <div key={idx}>
//               {/* Render detail item sesuai kebutuhan */}
//               <p>{item.title}</p>
//               <img src={item.image} alt={item.title} />
//             </div>
//           ))}
//         </div>
//       ))}
//     </>
//   );
// };

// export default Index;

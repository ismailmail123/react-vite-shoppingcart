// import "./style.css";

import Image from "../../../../assets/react.svg";
import useCartStore from "../../../../store/useCartStore";
import { Container, ButtonProduct, ButtonHide, Date, Buttonpay, Component, ContainerList, Content, PPrice, Price, ProductContent, ProductText, ContainerButton} from "./styles";





const index = ({history}) => {

  // const {orderHistory} = useCartStore()
  console.log("ini product", history)
  // const titles = history.order.map(item => item.title);

  // console.log("ini title", titles);

  return (
    <>
    {
    history.order.map((item,index) => (
      <>
      <Container>
      <ContainerList >
      <Content key={index}>
        <ProductContent>
          <img src={item.image} />
          <ProductText>
            <p>{item.title}</p>
            <ButtonProduct>
              <Price>
                <PPrice>{new Intl.NumberFormat("id-ID",
                {style : "currency",
                currency: "IDR",})
                .format(item.price)
                }</PPrice>
              </Price>
              <Component>
                <Buttonpay>Beli Lagi</Buttonpay>
                <Date>{history.timestamp}</Date>
              </Component>
            </ButtonProduct>
          </ProductText>
        </ProductContent>
      </Content>
    </ContainerList>
    {/* <ContainerButton>
    <ButtonHide>Lihat detail</ButtonHide>
    </ContainerButton> */}
    </Container>
      </>
    ))
    }
    
    
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


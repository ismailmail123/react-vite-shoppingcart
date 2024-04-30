// import { useParams } from "react-router-dom";
// import useCartStore from "../../store/useCartStore";

// const index = () => {

//     const {orderHistory} = useCartStore();
//     const {index} = useParams();

//     console.log ("iiiii", index)
//     console.log ("order", orderHistory.index[index])

//     return (
//       <>
//        <div>order history</div>
//        {
//         orderHistory.index?.map((item, index) => (
//             <div>{item.reminder}</div>
//         ))
//        }
//       </>
//     )
// }

// export default index;
import React from "react";
import useCartStore from "../../store/useCartStore";
import { useParams } from "react-router-dom";
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
    Title,
    ContainerDetail,
    TextTittle,
    Detail,
    Text
  } from "./styles";

const Index = () => {
  const { orderHistory } = useCartStore();
const {index} = useParams();
  // Pastikan orderHistory adalah array dan memiliki setidaknya satu elemen
  if (!Array.isArray(orderHistory) || orderHistory.length === 0) {
    return <div>Tidak ada data order history.</div>;
  }

  // Mengambil data dari orderHistory indeks ke-0
  const orderHistoryItem = orderHistory[index];
  console.log("order history", orderHistory)
  return (
    <Container>
        <>
            <Title style={{borderBottom: "0"}}>Detail Order History</Title>
            <Title>{orderHistoryItem.timestamp}</Title>
            {
        orderHistoryItem.order.map((item, index) => (
            <ContainerList key={index}> 
            
            <Content >               
              <ProductContent>
                <img src={item.image} />
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
                      <Buttonpay onClick={() => navigate(`/detailhistory/${index}`)}>Beli Lagi</Buttonpay>
                      <Date>x {item.quantity}</Date>
                    </Component>
                  </ButtonProduct>
                </ProductText>
              </ProductContent>
            </Content>
          </ContainerList>
          )) } 
        </>
        <ContainerDetail>
            <TextTittle>Detail of Payment</TextTittle>
            <Detail>
                <Text>Total Quantity</Text>
                <Text>{orderHistoryItem.totalQuantity}</Text>
            </Detail>
            <Detail>
                <Text>Total Price</Text>
                <Text>{new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(orderHistoryItem.totalPrice)}</Text>
            </Detail>
            <Detail>
                <Text>Total Payment</Text>
                <Text>
                {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(orderHistoryItem.paymentAmount)}</Text>
            </Detail>
            <Detail>
                <Text>Total Reminder</Text>
                <Text>
                {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(orderHistoryItem.reminder)}
                    </Text>
            </Detail>
        </ContainerDetail>
      
    </Container>
  );
};

export default Index;

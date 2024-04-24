// import "./style.css";

import Image from "../../../../assets/react.svg";
import useCartStore from "../../../../store/useCartStore";
import { ButtonProduct, Date, Buttonpay, Component, ContainerList, Content, PPrice, Price, ProductContent, ProductText} from "./styles";

// const groupOrdersByDate = (data) => {
//   const groupedOrders = {};
  
//   data.forEach(orderData => {
//     const date = orderData.timestamp.split(',')[0]; // Mendapatkan tanggal saja
//     if (!groupedOrders[date]) {
//       groupedOrders[date] = [];
//     }
//     groupedOrders[date].push(orderData);
//   });
  
//   return groupedOrders;
// };

// // Memanggil fungsi untuk mengelompokkan pesanan berdasarkan tanggal
// const groupedOrders = groupOrdersByDate(history);

// console.log("ini group order", groupedOrders);






const index = ({history}) => {

  // const {orderHistory} = useCartStore()
  console.log("ini product", history)
  // const titles = history.order.map(item => item.title);

  // console.log("ini title", titles);

  return (
    <>
    {
    history.order.map((item,index) => (
      <ContainerList>
      <Content>
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
    ))
    }
    
    
    </>
  );
};

export default index;

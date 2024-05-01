import useCartStore from "../../../../store/useCartStore";
import {
  ButtonProduct,
  Date,
  Buttonpay,
  Component,
  ContainerList,
  Content,
  PPrice,
  Price,
  ProductContent,
  ProductText,
} from "./styles";

const index = ({ item }) => {
  const { addCartItems } = useCartStore();
  const onAddToCart = () => {
    window.location.reload();
    addCartItems(item);
    // window.location.reload();
    alert("data berhasil ditambahkan");
    // navigate("/cart")
    console.log("ini order historyyyyyyyy", item);
  };
  return (
    <>
      <ContainerList key={index}>
        <Content>
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
                  <Buttonpay onClick={onAddToCart}>Beli Lagi</Buttonpay>
                  <Date>x {item.quantity}</Date>
                </Component>
              </ButtonProduct>
            </ProductText>
          </ProductContent>
        </Content>
      </ContainerList>
    </>
  );
};

export default index;

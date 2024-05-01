import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Image,
  ImageLimited,
  Label,
  Desc,
  Price,
  WrapDesc,
  ButtonAdd,
  Containerbtn,
  LabelStock,
  Limited
} from "./styles";
import Icon from '../../../../assets/icons/out.svg'
import useCartStore from "../../../../store/useCartStore";
import cartIcon from "../../../../assets/icons/cart.svg";

const index = ({ product }) => {
  const { addCartItems } = useCartStore();
  const onAddToCart = () => {
    addCartItems(product);
    // alert("data berhasil ditambahkan")
    // navigate("/cart")
    console.log(product)
  };
  return (
    <>{
      product.stock === 0 ? (
        <Container>
          <LabelStock>
            <Limited>
              <img src={Icon} />
            </Limited>
          </LabelStock>
          <ImageLimited src={product.image} />
          <WrapDesc>
            <Label>{product.title}</Label>
            <Desc>{product.description}</Desc>
            <Price>{`Rp. ${product.price}`}</Price>
          </WrapDesc>
          <Containerbtn>
            <ButtonAdd
              style={{ backgroundColor: "darkgrey" }}
              onClick={onAddToCart} disabled >
              <img src={cartIcon} alt="Tambah" />
            </ButtonAdd>
          </Containerbtn>
        </Container>
      ) : (
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
      )
    }

    </>
  );
};

export default index;

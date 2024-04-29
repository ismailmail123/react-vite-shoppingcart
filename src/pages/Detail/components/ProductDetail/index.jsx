import {
  Container,
  Image,
  Label,
  Desc,
  Price,
  WrapDesc,
  Rating,
} from "./styles";


const index = ({data}) => {
  // const [data, setData] = useState();

  const locale = "id-ID";
  const option = {
    style: "currency",
    currency: "IDR",
  };

  
  return (
    <>
      
        
           
          <>
           
                <>
                  <Container > 
              <Image  src={data.image} />
              <WrapDesc>
                <Label>
                  {data.title}
                </Label>
                <Desc>
                  {data.description}
                </Desc>
                <Price>{new Intl.NumberFormat(locale, option).format(
                      data.price)}</Price>
                <Rating>⭐ {data.rating?.rate} / 5</Rating>
              </WrapDesc>
               </Container>
                </>
              
            </>
         
          
      
    </>
  );
};

export default index;



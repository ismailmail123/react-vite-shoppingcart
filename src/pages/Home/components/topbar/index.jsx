import { Container, Title, ButtonCart } from './styles'
import cartIcon from '../../../../assets/icons/cart.svg'
import { useNavigate } from 'react-router-dom';


const index = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate()
  return(
    <>
    <Container>
    <Title>Toko Online</Title>

    <ButtonCart onClick={() => navigate('/cart')}>
      <img src={cartIcon} />
    </ButtonCart>
  </Container>
    </>
  )
  
};

export default index;
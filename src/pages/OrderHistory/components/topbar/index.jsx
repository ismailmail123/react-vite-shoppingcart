/* eslint-disable react-hooks/rules-of-hooks */
import { Container, Title, ButtonCart, Content, Backhome, Buttonhome} from './styles'
import backIcon from '../../../../assets/icons/back.svg'
import { useNavigate } from 'react-router-dom';
import cartIcon from '../../../../assets/icons/cart.svg'

const index = () => {

  const navigate = useNavigate();
  return (
  <Container>
    <Content>
    <ButtonCart onClick={() => navigate(-1)}>
      <img src={backIcon} />
      
    </ButtonCart>
    <Title> Pesanan Saya</Title>
    </Content>
    <Backhome>
    <Buttonhome onClick={() => navigate('/')}>
        Home
      </Buttonhome>
    <ButtonCart onClick={() => navigate('/cart')}>
        <img src={cartIcon} />
      </ButtonCart>
    </Backhome>
  </Container>
  )
};

export default index;
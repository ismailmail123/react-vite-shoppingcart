/* eslint-disable react-hooks/rules-of-hooks */
import { Container, ButtonCart, Content, ButtonDel, Back } from './styles'
import backIcon from '../../../../assets/icons/back.svg'
import { useNavigate } from 'react-router-dom';
import cartIcon from '../../../../assets/icons/cart.svg'

const index = () => {

  const navigate = useNavigate();
  return (
  <Container>
    <Content>
    <ButtonCart onClick={() => navigate("/")}>
      <img src={backIcon} />
      
    </ButtonCart>
    </Content>
    <Back>
      <ButtonDel onClick={() => navigate('/')}>
        Home
      </ButtonDel>
      <ButtonCart onClick={() => navigate('/cart')}>
        <img src={cartIcon} />
      </ButtonCart>
    </Back>
  </Container>
  )
};

export default index;
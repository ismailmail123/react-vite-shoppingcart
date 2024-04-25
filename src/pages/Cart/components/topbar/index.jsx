/* eslint-disable react-hooks/rules-of-hooks */
import { Container, Title, ButtonCart, Content, ButtonDel } from './styles';
import backIcon from '../../../../assets/icons/back.svg'
import { useNavigate } from 'react-router-dom';


const index = ({handleUnselect}) => {

  const navigate = useNavigate();
  return (
  <Container>
    <Content>
    <ButtonCart onClick={() => navigate(-1)}>
      <img src={backIcon} />
      
    </ButtonCart>
    <Title> Keranjang Saya</Title>
    </Content>
    <ButtonDel onClick={handleUnselect}>Ubah</ButtonDel>
    
  </Container>
  )
};

export default index;
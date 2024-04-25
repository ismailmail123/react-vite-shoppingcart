import Topbar from './components/topbar';
import ProductList from './components/productList';
import Checkout from '../../components/checkout'
// import Detail from './components/detail';
import useCartStore from '../../store/useCartStore';
import { TextEmpty } from './styles';


const index = () => {

    const selectedProducts = useCartStore((state) => state.selectedProducts)

    console.log("cart items", selectedProducts)
    return (
        <>
            <Topbar />
            {
                selectedProducts.length == 0 ? 
                <TextEmpty>
                    <p>Data order masih kosong</p>
                </TextEmpty>
                :
                selectedProducts?.map((item,index) => (
                    <ProductList key={index} order={item}/>
                ))
            }
            
            {/* <Detail /> */}
            <Checkout selectall={false} order={false} />
        </>
    )
}

export default index;
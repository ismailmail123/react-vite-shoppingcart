import Topbar from './components/topbar';
import ProductList from './components/productList';
import Checkout from '../../components/checkout'
import Detail from './components/detail';
import useCartStore from '../../store/useCartStore';


const index = () => {

    const cartItems = useCartStore((state) => state.cartItems)

    console.log("cart items", cartItems)
    return (
        <>
            <Topbar />
            {
                cartItems?.map((item,index) => (
                    <ProductList key={index} order={item}/>
                ))
            }
            
            {/* <Detail /> */}
            <Checkout />
        </>
    )
}

export default index;
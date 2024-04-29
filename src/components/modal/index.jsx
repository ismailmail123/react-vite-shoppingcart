import { useState } from "react";
import "./styles.css";
import Icon from "../../assets/icons/close.svg";
import useCartStore from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";

const getTotal = (cartItem) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItem.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  return { totalPrice, totalQuantity };
};

const Modal1 = ({ isOpen, toggleModal }) => {
  const navigate = useNavigate();
  const selectedProducts = useCartStore((state) => state.selectedProducts);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const { totalQuantity, totalPrice } = getTotal(selectedProducts);
  const { addOrder } = useCartStore();

  const onPaymentChange = (e) => {
    // Mengubah nilai paymentAmount saat input berubah
    setPaymentAmount(parseInt(e.target.value));
  };

  const removeSelectedProduct = (productId) => {
    useCartStore.setState((state) => ({
      selectedProducts: state.selectedProducts.filter(
        (product) => product.id !== productId
      ),
    }));
  };

  const onAddToOrder = () => {
    if (selectedProducts.length === 0) {
      alert("belum ada data yang ditambahkan");
    } else {
      addOrder(selectedProducts, totalPrice, reminder, paymentAmount, totalQuantity);
      alert("Anda berhasil melakukan pembayaran");
      navigate("/riwayat");
      // Hapus produk yang dipilih dari keranjang setelah menambahkan pesanan
      selectedProducts.forEach((product) => {
        removeSelectedProduct(product.id);
      });
    }
  };

  // const totalPrice = getTotal(selectedProducts);
  const reminder = paymentAmount - totalPrice;

  return (
    <>
      <div className={`modal-1-overlay ${isOpen ? "open" : ""}`}>
        <div className="modal-1-modal">
          <form>
            <div className="div-close">
              <button className="btn-close" onClick={toggleModal}>
                <img src={Icon} alt="Close" />
              </button>
            </div>
            <h2>Inputkan total pembayaran</h2>
            <label htmlFor="price">Price</label>
            <div className="textbox">
              <input
                name="price"
                type="number"
                value={paymentAmount} // Menghubungkan nilai input dengan state paymentAmount
                onChange={onPaymentChange} // Menggunakan event handler untuk memperbarui nilai paymentAmount
              />
            </div>
            <button
              className="signup-button"
              type="submit"
              onClick={onAddToOrder}
            >
              Kirim
            </button>
          </form>
          <div className="wrapper">
            <div className="detail">
              <p>Total Quantity </p>
              <p> {totalQuantity}</p>
            </div>
            <div className="detail">
              <p>Total price </p>
              <p>
                {" "}
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(totalPrice)}
              </p>
            </div>
            <div className="detail">
              <p>Total bayar </p>
              <p>
                {" "}
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(paymentAmount)}
              </p>
            </div>{" "}
            <div
              className="detail"
              style={{ fontWeight: "bold", fontSize: "17px" }}
            >
              <p>Sisa </p>
              <p>
                {" "}
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(reminder)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal1;

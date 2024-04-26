import { useState } from "react";
import "./styles.css";
import Icon from '../../assets/icons/close.svg'


const Modal1 = ({ isOpen, toggleModal }) => {


    return (

        <>
            <div
                className={`modal-1-overlay ${isOpen ? "open" : ""}`}      >
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

                            <input name="price" type="number" />
                        </div>
                        <button
                            className="signup-button"
                            type="submit"

                        >
                            Kirim
                        </button>
                    </form>
                    <div className="wrapper">
                        <div className="detail">
                            <p>Total price </p>
                            <p> Rp. 59.000</p>
                        </div>
                        <div className="detail">
                            <p>Total bayar </p>
                            <p> Rp. 59.000</p>
                        </div> <div className="detail" style={{ fontWeight: "bold", fontSize: "17px" }}>
                            <p>Sisa </p>
                            <p> Rp. 59.000</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
};

export default Modal1;

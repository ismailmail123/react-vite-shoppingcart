import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
    persist(
        (set, get) => ({
            cartItems: [],
            orderHistory: [],
            selectedProducts: [],
            // orders: [],

            addCartItems: (item) => {
                const itemExists = get().cartItems.find(
                    (cartItem) => cartItem.id == item.id
                );

                if (itemExists) {
                    if (typeof itemExists.quantity == "number") {
                        itemExists.quantity++;
                    }

                    set({ cartItems: [...get().cartItems] });
                } else {
                    set({ cartItems: [...get().cartItems, {...item, quantity: 1 }] });
                }
            },

            addOrder: (order, totalPrice, reminder, paymentAmount, totalQuantity) =>
                set((state) => ({
                    orderHistory: [
                        ...state.orderHistory,
                        {
                            order,
                            totalPrice,
                            reminder,
                            paymentAmount, 
                            totalQuantity,
                            timestamp: new Date().toLocaleString(), // Waktu pemesanan
                        },
                    ],
                })),

            selectAllProducts: () => {
                const allProducts = get().cartItems; // Ambil seluruh produk
                const allProductIds = allProducts.map((item) => item); // Ambil hanya ID produk
                set({ selectedProducts: allProductIds }); // Set seluruh produk sebagai yang dipilih
            },

            toggleSelectedProduct: (productId) => {
                const isSelected = get().selectedProducts.includes(productId);
                if (isSelected) {
                    set((state) => ({
                        selectedProducts: state.selectedProducts.filter(
                            (id) => id !== productId
                        ),
                    }));
                } else {
                    set((state) => ({
                        selectedProducts: [...state.selectedProducts, productId],
                    }));
                }
            },

            increaseQuantity: (productId) => {
                const itemExists = get().cartItems.find(
                    (cartItem) => cartItem.id === productId
                );

                if (itemExists) {
                    if (typeof itemExists.quantity === "number") {
                        itemExists.quantity++;
                    }

                    set({ cartItems: [...get().cartItems] });
                }
            },

            decreaseQuantity: (productId) => {
                const itemExists = get().cartItems.find(
                    (cartItem) => cartItem.id === productId
                );

                if (itemExists) {
                    if (typeof itemExists.quantity === "number") {
                        if (itemExists.quantity === 1) {
                            const updatedCartItems = get().cartItems.filter(
                                (item) => item.id !== productId
                            );
                            set({ cartItems: updatedCartItems });
                        } else {
                            itemExists.quantity--;
                            set({ cartItems: [...get().cartItems] });
                        }
                    }
                }
            },
            removeItemFromCart: (productId) => {
                const itemExists = get().cartItems.find(
                    (cartItem) => cartItem.id === productId
                );

                if (itemExists) {
                    if (typeof itemExists.quantity === "number") {
                        const updatedCartItems = get().cartItems.filter(
                            (item) => item.id !== productId
                        );
                        set({ cartItems: updatedCartItems });
                    }
                }
            },
        }), {
            name: "cart-items",
        }
    )
);

export default useCartStore;
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
    persist(
        (set, get) => ({
            cartItems: [],
            orderHistory: [],
            selectedProducts: [],
            // products: [{
            //         id: 1,
            //         image: 'https://mills.co.id/cdn/shop/products/200910161601_WhatsApp_20Image_202020-09-10_20at_2014.31.19_1__ori.jpg?v=1706094127&width=1445',
            //         title: 'Black Winter...',
            //         description: 'Autumn And Winter Casual cotton-padded jacket...',
            //         price: 5000,
            //         rating: {
            //             rat: 4.5,
            //             count: 100
            //         }
            //     },
            //     {
            //         id: 2,
            //         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7godOCXTJHjEKYqEqT3K4fjmwIVMZNvFXThuSLOON_g&s',
            //         title: 'Black Winter...',
            //         description: 'Autumn And Winter Casual cotton-padded jacket...',
            //         price: 5000,
            //         rating: {
            //             rat: 4.7,
            //             count: 100
            //         }
            //     },
            //     {
            //         id: 3,
            //         image: 'https://laz-img-sg.alicdn.com/p/a66f3978b82a8bd7673f771f7cff6700.jpg',
            //         title: 'Black Winter...',
            //         description: 'Autumn And Winter Casual cotton-padded jacket...',
            //         price: 5000,
            //         rating: {
            //             rat: 4.6,
            //             count: 100
            //         }
            //     },
            //     {
            //         id: 4,
            //         image: 'https://laz-img-sg.alicdn.com/p/a66f3978b82a8bd7673f771f7cff6700.jpg',
            //         title: 'Black Winter...',
            //         description: 'Autumn And Winter Casual cotton-padded jacket...',
            //         price: 5000,
            //         rating: {
            //             rat: 4.8,
            //             count: 100
            //         }
            //     },

            // ],
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
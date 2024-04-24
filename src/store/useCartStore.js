import { create } from 'zustand';
import { persist } from "zustand/middleware";

const useCartStore = create(persist((set, get) => ({
    carItems: [],

    adCartItems: (item) => {
        const itemExists = get().carItems.find(
            (cartItem) => cartItem.id == item.id
        );

        if (itemExists) {
            if (typeof itemExists.quantity == "number") {
                itemExists.quantity++;
            }

            set({ carItems: [...get().carItems] });
        } else {
            set({ carItems: [...get().carItems, {...item, quantity: 1 }] });
        }
    }
})));

export default useCartStore;
import { createContext, type ReactNode, useContext } from 'react';

type Item = {
	id: string;
	image: string;
	title: string;
	price: number;
	description: string;
	quantity: number;
};

type CartState = {
	items: Item;
};

type CartContextValue = CartState & {
	addItemToCart: (item: Item) => void;
	updatedItemQuantity: (itemId: string, quantity: number) => void;
};

// type initialState = {
// 	items: [];
// };

const CartContext = createContext<CartContextValue | null>(null);

export function useCartContext() {
	const cartCtx = useContext(CartContext);

	if (cartCtx === null) {
		throw new Error('CartContext is null - that should not be case!');
	}

	return cartCtx;
}

type CartContextProviderProps = {
	children: ReactNode;
};

export function CartContextProvider({ children }: CartContextProviderProps) {
	const ctx: CartContextValue = {
		items: [],
	};

	return <CartContext.Provider value={ctx}>{children}</CartContext.Provider>;
}

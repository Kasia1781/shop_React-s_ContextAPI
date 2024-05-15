import { createContext, type ReactNode, useContext, useReducer } from 'react';
import { DUMMY_PRODUCTS } from '/TypeScript_Git/shop_React-s_ContextAPI/src/dummy-products.js';

type Item = {
	id: string;
	image: string;
	title: string;
	price: number;
	description: string;
	quantity: number;
};

type CartState = {
	items: Item[];
};

type CartContextValue = CartState & {
	addItemToCart: (item: Item) => void;
	updatedItemQuantity: (itemId: string, quantity: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function useCartContext() {
	const cartCtx = useContext(CartContext);

	if (cartCtx === null) {
		throw new Error('CartContext is null - that should not be case!');
	}

	return cartCtx;
}

type AddItemAction = {
	type: 'ADD_ITEM';
};

type UpdateItemAction = {
	type: 'UPDATE_ITEM';
};

type Action = AddItemAction | UpdateItemAction;

function shoppingCartReducer(state: CartState, action: Action): CartState {
	if (action.type === 'ADD_ITEM') {
		const updatedItems = [...state.items];

		const existingCartItemIndex = updatedItems.findIndex(
			(cartItem) => cartItem.id === action.payload
		);

		const existingCartItem = updatedItems[existingCartItemIndex];

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				quantity: existingCartItem.quantity + 1,
			};
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			const product = DUMMY_PRODUCTS.find(
				(product) => product.id === action.payload
			);
			updatedItems.push({
				id: action.payload,
				name: product.title,
				price: product.price,
				quantity: 1,
			});
		}

		return {
			...state,
			items: updatedItems,
		};
	}

	if (action.type === 'UPDATE_ITEM') {
		const updatedItems = [...state.items];
		const updatedItemIndex = updatedItems.findIndex(
			(item) => item.id === action.payload.productId
		);

		const updatedItem = {
			...updatedItems[updatedItemIndex],
		};

		updatedItem.quantity += action.payload.amount;

		if (updatedItem.quantity <= 0) {
			updatedItems.splice(updatedItemIndex, 1);
		} else {
			updatedItems[updatedItemIndex] = updatedItem;
		}

		return {
			...state,
			items: updatedItems,
		};
	}
	return state;
}

type CartContextProviderProps = {
	children: ReactNode;
};

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [shoppingCartState, shoppingCartDispatch] = useReducer(
		shoppingCartReducer,
		{ items: [] }
	);

	function handleAddItemToCart(id: string) {
		shoppingCartDispatch({
			type: 'ADD_ITEM',
			payload: id,
		});
	}

	function handleUpdateCartItemQuantity(productId: string, amount: number) {
		shoppingCartDispatch({
			type: 'UPDATE_ITEM',
			payload: {
				productId,
				amount,
			},
		});
	}

	const ctx: CartContextValue = {
		items: shoppingCartState.items,
		addItemToCart: handleAddItemToCart,
		updatedItemQuantity: handleUpdateCartItemQuantity,
	};

	return <CartContext.Provider value={ctx}>{children}</CartContext.Provider>;
}

import IBasketModel from "../../models/basket/IBasketModel";
import BasketModel from "../../models/basket/BasketModel";
import IBasketAction from "../IBasketAction";
import EnumBasketActionTypes from "../EnumBasketActionTypes";

const BasketReducer = (state = new BasketModel(), action: IBasketAction): IBasketModel => {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case EnumBasketActionTypes.ADD:

            newState.items.push(action.state);
            // @ts-ignore
            newState.total += action.state.item.price;

            return newState;

        case EnumBasketActionTypes.UPDATE:
            // @ts-ignore - Should never be undefined
            const updatedItemId = action.state.item.id;

            const allItems = state.items;

            const index = allItems.findIndex(i => i.item.id === updatedItemId);

            if (index > -1) {
                allItems[index].quantity = action.state.quantity;

                if (action.state.quantity === 0) {
                    allItems.splice(index, 1);
                }

                newState.items = allItems;
                // @ts-ignore
                newState.total = allItems.reduce((a, b) => a + (b.item.price * b.quantity ), 0);
            }

            return newState;
        default:
            return state;
    }
}

export default BasketReducer;
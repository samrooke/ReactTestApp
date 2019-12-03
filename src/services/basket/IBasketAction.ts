import EnumBasketActionTypes from "./EnumBasketActionTypes";
import IBasketItemModel from "../models/basket/item/IBasketItemModel";

export default interface IBasketAction {
    type: EnumBasketActionTypes;
    state: IBasketItemModel;
}
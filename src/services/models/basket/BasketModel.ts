import IBasketModel from "./IBasketModel";
import IBasketItemModel from "./item/IBasketItemModel";

export default class BasketModel implements IBasketModel {
    items: Array<IBasketItemModel> = new Array<IBasketItemModel>();
    total: number = 0.00;
}
import IBasketItemModel from "./IBasketItemModel";
import IBaseItemModel from "../../base-item/IBaseItemModel";
import BaseItemModel from "../../base-item/BaseItemModel";

export default class BasketItemModel implements IBasketItemModel {
    item: IBaseItemModel = new BaseItemModel();
    quantity: number = 0;
}
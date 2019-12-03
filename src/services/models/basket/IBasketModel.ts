import IBaseItemModel from "../base-item/IBaseItemModel";
import IBasketItemModel from "./item/IBasketItemModel";

export default interface IBasketModel {
    items: Array<IBasketItemModel>;
    total: number;
}
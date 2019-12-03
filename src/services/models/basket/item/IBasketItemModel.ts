import IBaseItemModel from "../../base-item/IBaseItemModel";

export default interface IBasketItemModel {
    item: IBaseItemModel;
    quantity: number;
}
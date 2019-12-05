import { EnumFilterType } from "../Filter";

export default interface IFilterComponentFactry {
    getComponent: (type: EnumFilterType) => React.ReactNode;
}
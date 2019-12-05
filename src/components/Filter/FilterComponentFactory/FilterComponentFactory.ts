import React from 'react';
import EnumFilterType from '../enums/EnumFilterType';
import Popout from '../../Popout/Popout';
import Dropdown from '../../Dropdown/Dropdown';

export default class FilterComponentFactory  {
    public static getComponent(type: EnumFilterType): React.FC<any> | React.SFC<any> {
        switch (type) {
            case EnumFilterType.Dropdown:
                return Dropdown;
            case EnumFilterType.Popout:
                return Popout;
            default:
                return Dropdown;
        }
    }
}
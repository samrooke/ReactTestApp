import React from 'react';
import FilterComponentFactory from './FilterComponentFactory/FilterComponentFactory';
import EnumFilterType from './enums/EnumFilterType';

interface IFilterProps {
    type: EnumFilterType;
    data?: any;
    render?: () => React.ReactNode;
};

const Filter: React.SFC<IFilterProps> = ({ type, data, ...props }) => {
    const Component = FilterComponentFactory.getComponent(type);

    return (
        <div className="filter">
            <Component {...props} />
        </div>
    )
};

export default Filter;
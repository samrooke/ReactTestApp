import React from 'react';
import Filter from '../../components/Filter/Filter';
import EnumFilterType from '../../components/Filter/enums/EnumFilterType';

const Test: React.SFC = () => (
    <div className="test">
        <h1>This is a place to test your components</h1>
        <Filter
            type={EnumFilterType.Dropdown}
            render={() => {
                return (
                    <div>This is what I'd like to render in my filter component</div>
                )
            }}
        />
    </div>
);

export default Test;
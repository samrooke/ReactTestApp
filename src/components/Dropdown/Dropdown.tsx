import React, { useState } from 'react';
import IFilterProps from '../Filter/interfaces/IFilterProps';

interface IDropdownProps extends IFilterProps {
    data: any;
}

const Dropdown: React.SFC<IDropdownProps> = ({ data, ...props }) => {
    const [ isActive, setIsActive ] = useState(true);

    return (
        <div className={`dropdown ${isActive ? "active" : undefined}`}
             onClick={() => setIsActive(!isActive)}>
            {props.render && props.render()}
        </div>
    )
}

export default Dropdown;
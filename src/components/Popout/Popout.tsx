import React from 'react';
import IFilterProps from '../Filter/interfaces/IFilterProps';

type PositionType = "left" | "top" | "right" | "bottom";

interface IPopoutProps extends IFilterProps {
    position: PositionType;
};

const Popout: React.SFC<IPopoutProps> = ({ position, ...props }) => (
    <div className={`popout ${position}`}>
        {props.render && props.render()}
    </div>
);

export default Popout;
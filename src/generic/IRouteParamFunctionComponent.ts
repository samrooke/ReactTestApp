import React from 'react';
import { RouteComponentProps } from "react-router";

interface RouteParam {
    id: string;
}

type IRouteParamFunctionComponent = React.FC<RouteComponentProps<RouteParam>>;

export default IRouteParamFunctionComponent;
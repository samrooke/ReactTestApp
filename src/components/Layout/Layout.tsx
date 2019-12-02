import React from 'react';
import Header from '../Header/Header';

const Layout: React.FC = (props) => (
    <React.Fragment>
        <Header />
        {props.children}
    </React.Fragment>
);

export default Layout;
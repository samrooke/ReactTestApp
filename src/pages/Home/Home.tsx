import React from 'react';
import { Link } from 'react-router-dom';
import BaseRouteConstants from '../../routing/RouteConstants';
import CarRouteConstants from '../../routing/Cars/CarRouteConstants';

const Home: React.SFC = () => (
    <div className="home">
        <h1>Welcome to the test app.</h1>
        <h3>Here are some helpful links to help you navigate the app:</h3>
        <ul>
            <li><Link to={BaseRouteConstants.Dashboard}>Dashboard</Link></li>
            <li><Link to={CarRouteConstants.Base}>Cars</Link></li>
        </ul>
    </div>
);

export default Home;
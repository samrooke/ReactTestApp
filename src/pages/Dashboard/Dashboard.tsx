import React from 'react';
import { Link } from 'react-router-dom';
import BaseRouteConstants from '../../routing/RouteConstants';
import CarRouteConstants from '../../routing/Cars/CarRouteConstants';

const Dashboard: React.FC = () => (
    <div className="dashboard">
        <ul>
            <li><Link to={BaseRouteConstants.Home}>Back to Home</Link></li>
            <li><Link to={CarRouteConstants.Base}>View our Cars</Link></li>
        </ul>
    </div>
);

export default Dashboard;
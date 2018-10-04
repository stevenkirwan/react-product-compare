import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../components/App';
import ProductDetails from '../components/ProductDetails';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={App} exact={true} />
                <Route path="/:id" component={ProductDetails} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
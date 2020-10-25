import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

import MovieContainer from '.';
import Details from '../component/details';
import ErrorPage from '../component/error';

const Routers = () => {
   return <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MovieContainer}/>
                <Route exact path="/details/:id" component={Details}/>
                <Route component={ErrorPage}/>
            </Switch>
         </BrowserRouter>
}
export default Routers;
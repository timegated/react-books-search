import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Search from '../pages/search'

const route = () => {
    return (
        <Router>
            <React.Fragment>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Search} />
                </Switch>
            </React.Fragment>
        </Router>
    )
}

export default route;
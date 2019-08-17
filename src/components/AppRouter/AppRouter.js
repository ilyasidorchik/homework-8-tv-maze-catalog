// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.

import React, { PureComponent } from 'react';
import Search from '../Search';
import ShowPage from '../ShowPage';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './AppRouter.css';

class AppRouter extends PureComponent {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/" component={Search} exact />
                    <Route path="/shows/:id" component={ShowPage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(AppRouter);
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/MainPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const AwardsPage = lazy(() => import('./pages/AwardsPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const PlanningPage = lazy(()=> import("./client/Planning/pages/PlanningPage"))

const Routes = () => {
    return (
        <Suspense fallback={<p>Page loading...</p>}>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/auth" exact component={AuthPage} />
                <Route path="/awards" exact component={AwardsPage} />
                <Route path="/contacts" exact component={ContactsPage} />
                <Route path="/planing" exact component={PlanningPage} />
            </Switch>
        </Suspense>
    )
};

export default Routes;
 

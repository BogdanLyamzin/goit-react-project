import { useSelector} from 'react-redux'
import { Redirect, Route } from 'react-router';

import {getIsAuthenticated} from '../../../redux/auth/selectors'

function PrivateRoute({children, ...restProps}) {
    const isAuthorized = useSelector(getIsAuthenticated)
    return (
        <Route {...restProps} >
            {isAuthorized ?
                children : <Redirect to='/login'/> 
            }
        </Route>
    );
}

export default PrivateRoute;
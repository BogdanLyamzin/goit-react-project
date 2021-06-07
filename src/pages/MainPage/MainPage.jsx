import {getIsAuthenticated} from "../../redux/auth/selectors";
import {Redirect} from "react-router-dom";
import {shallowEqual, useSelector} from "react-redux";

const MainPage = () => {
  const isAuthorized = useSelector(getIsAuthenticated, shallowEqual);
  if(!isAuthorized){
    return <Redirect to="/auth" />
  }
}

export default MainPage

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import {Provider} from 'react-redux';
import App from './App';
// import store from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      {/* <Provider store={store}> */}
=======

    <Provider store={store}> 
   <Provider store={store}>
>>>>>>> 58c4ce594db9e3d232059b09b40fc2cf59611077
        <App />
      </Provider> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

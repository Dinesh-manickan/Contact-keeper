// import React, { useContext } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import AuthContext from '../../context/auth/authContext';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const authContext = useContext(AuthContext);
//   const { isAuthenticated, loading } = authContext;

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated && !loading ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

// export default PrivateRoute;
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom'; // Import Navigate instead of Redirect
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return (
    <Route
      {...rest}
      element={isAuthenticated && !loading ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;


import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import your authentication context

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { user } = useAuth(); // Get the user from your authentication context

  return (
    <Route
      {...rest}
      element={user ? <Element /> : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
import { Navigate, Outlet } from "react-router-dom";
import * as ROUTES from "../constants/routes"

const useAuth = (user) => {
  return user && true;
}

export const IsUserRedirect = ({ user, navigateTo }) => {
  const isAuth = useAuth(user);
  return !isAuth ? <Outlet /> : <Navigate to={navigateTo} />
}

export const ProtectedRoutes = ({ user }) => {
  const isAuth = useAuth(user);
  return isAuth ? <Outlet /> : <Navigate to={ROUTES.SIGN_IN} />
};
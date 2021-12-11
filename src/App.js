import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, SignIn, SignUp } from "./pages";
import { ProtectedRoutes, IsUserRedirect } from "./helpers/routes";
import { useAuthListener } from "./hooks"

export default function App() {
  const user = useAuthListener();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes user={user} />}>
          <Route path={ROUTES.BROWSE} element={<Browse />} />
        </Route>

        <Route element={<IsUserRedirect user={user} navigateTo={ROUTES.BROWSE} />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

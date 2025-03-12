import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { getUserAuthState } from "5.entities/User";
import { AppRoute, routePath } from "6.shared/config/routeConfig/routeConfig";

export const RequireAuth = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const isAuth = useSelector(getUserAuthState);
  const location = useLocation();

  if (!isAuth) {
    return (
      <Navigate
        to={routePath[AppRoute.MAIN]}
        replace
        state={{ from: location }}
      />
    );
  } else {
    return <>{children}</>;
  }
};

import { memo, Suspense, useCallback } from "react";
import { Routes, Route, RouteProps } from "react-router-dom";

import { AboutPage } from "2.pages/AboutPage";
import { MainPage } from "2.pages/MainPage";
import { NotFoundPage } from "2.pages/NotFoundPage";
import { ProfilePage } from "2.pages/ProfilePage";
import { PageLoader } from "3.widgets/PageLoader";
import { AppRoute, routePath } from "6.shared/config/routeConfig/routeConfig";
import { RequireAuth } from "./RequireAuth";

type TAppRouteProps = RouteProps & { authOnly?: boolean };

export const routeConfig: Record<AppRoute, TAppRouteProps> = {
  [AppRoute.MAIN]: {
    path: routePath[AppRoute.MAIN],
    element: <MainPage />,
  },
  [AppRoute.ABOUT]: {
    path: routePath[AppRoute.ABOUT],
    element: <AboutPage />,
  },
  [AppRoute.PROFILE]: {
    path: routePath[AppRoute.PROFILE],
    element: <ProfilePage />,
    authOnly: true,
  },
  // last
  [AppRoute.NOT_FOUND]: {
    path: routePath[AppRoute.NOT_FOUND],
    element: <NotFoundPage />,
  },
};

export const AppRouter = memo(function AppRouter() {
  const renderWithWrapper = useCallback((route: TAppRouteProps) => {
    return (
      <Route
        key={route.path}
        {...route}
        element={
          route?.authOnly ? (
            <RequireAuth>{route.element}</RequireAuth>
          ) : (
            route.element
          )
        }
      />
    );
  }, []);

  return (
    <div className="page-wrapper">
      <Suspense fallback={<PageLoader />}>
        <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
      </Suspense>
    </div>
  );
});

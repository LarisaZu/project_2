import { Suspense } from "react";
import { Routes, Route, RouteProps } from "react-router-dom";

import { AboutPage } from "2.pages/AboutPage";
import { MainPage } from "2.pages/MainPage";
import { NotFoundPage } from "2.pages/NotFoundPage/ui";
import { PageLoader } from "3.widgets/PageLoader";

import { AppRoute, routePath } from "6.shared/config/routeConfig/routeConfig";

export const routeConfig: Record<AppRoute, RouteProps> = {
  [AppRoute.MAIN]: {
    path: routePath[AppRoute.MAIN],
    element: <MainPage />,
  },
  [AppRoute.ABOUT]: {
    path: routePath[AppRoute.ABOUT],
    element: <AboutPage />,
  },
  [AppRoute.NOT_FOUND]: {
    path: routePath[AppRoute.NOT_FOUND],
    element: <NotFoundPage />,
  },
};

export const AppRouter = () => {
  return (
    <div className="page-wrapper">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {Object.values(routeConfig).map((routeProps) => (
            <Route key={routeProps.path} {...routeProps} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

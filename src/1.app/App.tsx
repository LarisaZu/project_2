import { Link } from "react-router-dom";

import { AppRouter } from "1.app/providers/router";
import { classNames, useTheme } from "6.shared/lib";
import { AppRoute, routePath } from "6.shared/config/routeConfig/routeConfig";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <Link to={routePath[AppRoute.MAIN]}>Главная</Link>
      <Link to={routePath[AppRoute.ABOUT]}>О сайте</Link>
      <button onClick={toggleTheme}>toggleTheme</button>

      <AppRouter />
    </div>
  );
};

export default App;

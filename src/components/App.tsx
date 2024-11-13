import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import AboutPage from "./pages/AboutPage/AboutPage.async";
import MainPage from "./pages/MainPage/MainPage.async";
import useTheme from "../theme/useTheme";

import { classNames } from "../helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <button onClick={toggleTheme}>toggleTheme</button>
      <Suspense fallback="Загружаю...">
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

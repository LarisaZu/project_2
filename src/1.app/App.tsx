import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import { AboutPage } from "2.pages/AboutPage";
import { MainPage } from "2.pages/MainPage";
import { classNames, useTheme } from "6.shared/lib";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
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

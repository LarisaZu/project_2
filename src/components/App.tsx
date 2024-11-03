import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import AboutPage from "./pages/AboutPage/AboutPage.async";
import MainPage from "./pages/MainPage/MainPage.async";

const App = () => {
  return (
    <div className="app">
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
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

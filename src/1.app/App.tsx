import { AppRouter } from "1.app/providers/router";
import { Navbar } from "3.widgets/Navbar";
import { classNames, useTheme } from "6.shared/lib";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <Navbar />

      <AppRouter />
    </div>
  );
};

export default App;

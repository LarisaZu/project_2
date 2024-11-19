import { Suspense } from "react";
import { AppRouter } from "1.app/providers/router";
import { Navbar } from "3.widgets/Navbar";
import { Sidebar } from "3.widgets/Sidebar/ui";
import { classNames, useTheme } from "6.shared/lib";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-wrapper">
          <Sidebar />

          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;

import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppRouter } from "1.app/providers/router";
import { Navbar } from "3.widgets/Navbar";
import { Sidebar } from "3.widgets/Sidebar/ui";
import { classNames } from "6.shared/lib";
import { userActions } from "5.entities/User";
import { USER_LOCALSTORAGE_KEY } from "6.shared/const/localstorage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY));
    dispatch(userActions.initUserAuthData(authData));
  }, [dispatch]);

  return (
    <div className={classNames("app")}>
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

import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppRouter } from "1.app/providers/router";
import { Navbar } from "3.widgets/Navbar";
import { Sidebar } from "3.widgets/Sidebar/ui";
import { classNames } from "6.shared/lib";
import { getUserMounted, userActions } from "5.entities/User";
import { USER_LOCALSTORAGE_KEY } from "6.shared/const/localstorage";

const App = () => {
  const dispatch = useDispatch();
  const isMounted = useSelector(getUserMounted);

  useEffect(() => {
    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (user) {
      dispatch(userActions.initUserAuthData(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <div className={classNames("app")}>
      <Suspense fallback="">
        <Navbar />

        <div className="content-wrapper">
          <Sidebar />
          {isMounted && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;

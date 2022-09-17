import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { useContext, useEffect } from "react";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import Home from "./views/Home/Home";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotFound from "./styles/NotFound";

function App() {
  // const { authStore, appStore, notificationsStore, billingStore } = useContext(Context); (Example)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
      // window.router = navigate;
  }, [])

  return (
      <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
              <Routes location={location}>
                  {/*<Route element={<AuthGuard redirectTo="/login" auth={authStore.isAuth} />}>*/}
                  {/*    <Route path="/" element={<MainLayout />}>*/}
                  {/*        <Route path="/" element={<Home />} />*/}
                  {/*    </Route>*/}
                  {/*</Route>*/}
                  <Route path="/" element={<MainLayout />}>
                      <Route path="/" element={<Home />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
              </Routes>
        </CSSTransition>
      </TransitionGroup>
  );
}

export default observer(App);

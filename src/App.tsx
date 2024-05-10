import { lazy } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import { useCurrentQuery } from "./services/api/auth/userApi";
import { Layout } from "./components/Layout";
import { RestictedRoutes } from "./components/routes/RestictedRoutes";
import { PrivateRoutes } from "./components/routes/PrivateRoutes";

const Home = lazy(() => import("./pages/HomePages"));
const Register = lazy(() => import("@/pages/RegisterPages"));
const Login = lazy(() => import("@/pages/LoginPages"));
const Recommended = lazy(() => import("@/pages/RecommendedPage"));
const Training = lazy(() => import("@/pages/TrainingPage"));

function App() {
  const { isLoading } = useCurrentQuery();

  return (
    <>
      {isLoading ? (
        <div>Loading..</div>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/register"
              element={
                <RestictedRoutes redirectTo="/" component={<Register />} />
              }
            />
            <Route
              path="/login"
              element={<RestictedRoutes redirectTo="/" component={<Login />} />}
            />
            <Route
              index
              element={
                <PrivateRoutes redirectTo="/login" component={<Home />} />
              }
            />
            <Route
              path="/recommended"
              element={
                <PrivateRoutes
                  redirectTo="/login"
                  component={<Recommended />}
                />
              }
            />
            <Route
              path="/training"
              element={
                <PrivateRoutes redirectTo="/login" component={<Training />} />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;

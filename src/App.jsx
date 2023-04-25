import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/layout";
import React from "react";
import LoadingComponent from "./components/loadingComponent";

const Login = React.lazy(() => import("./screens/auth/login"));
const Register = React.lazy(() => import("./screens/auth/register"));

const Home = React.lazy(() => import("./screens/home"));
const Service = React.lazy(() => import("./screens/service"));
const Sparepart = React.lazy(() => import("./screens/sparepart"));
const Cars = React.lazy(() => import("./screens/cars"));
const ServiceSingle = React.lazy(() => import("./screens/serviceSingle"));
const SparepartSingle = React.lazy(() => import("./screens/sparepartSingle"));
const CarSingle = React.lazy(() => import("./screens/carSingle"));

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Outlet />}>
        <Route
          path="login"
          element={
            <React.Suspense fallback={<LoadingComponent />}>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="register"
          element={
            <React.Suspense fallback={<LoadingComponent />}>
              <Register />
            </React.Suspense>
          }
        />
      </Route>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <React.Suspense fallback={<LoadingComponent />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="service"
          element={
            <React.Suspense fallback={<LoadingComponent />}>
              <Service />
            </React.Suspense>
          }
        />
        <Route
          path="sparepart"
          element={
            <React.Suspense fallback={<LoadingComponent />}>
              <Sparepart />
            </React.Suspense>
          }
        />
        <Route
          path="cars"
          element={
            <React.Suspense fallback={<LoadingComponent />}>
              <Cars />
            </React.Suspense>
          }
        />
        <Route
          path="cars/:id"
          element={
            <React.Suspense fallback={<LoadingComponent />}>
              <CarSingle />
            </React.Suspense>
          }
        />
        <Route
          path="service/:id"
          element={
            <React.Suspense fallback={<LoadingComponent />}>
              <ServiceSingle />
            </React.Suspense>
          }
        />
        <Route
          path="sparepart/:id"
          element={
            <React.Suspense fallback={<LoadingComponent />}>
              <SparepartSingle />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

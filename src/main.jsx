import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./index.css";
import RootLayout from "./layout/RootLayout.jsx";
import Home, { loader as homeLoader } from "./pages/Home.jsx";
import CountryDetail, {
  loader as countryDetailLoader,
} from "./pages/CountryDetail.jsx";
import 'remixicon/fonts/remixicon.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<RootLayout />}
      // action={rootAction}
      // errorElement={<ErrorPage />}
    >
      <Route index element={<Home />} loader={homeLoader} />
      <Route path=":country" element={<CountryDetail />} loader={countryDetailLoader}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

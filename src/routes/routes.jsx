import { createBrowserRouter } from "react-router";
import HomePage from "../pages/public/HomePage";
import MainLayout from "../components/layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TermsAndServices from "../pages/TermsAndServices";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage/>,
    
    children: [
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/terms-services",
        element: <TermsAndServices/>,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>,
      },
    ]
  },
]);

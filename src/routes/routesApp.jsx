import { createBrowserRouter } from "react-router";
import LayoutHome from "../page/home/LayoutHome";
import LayoutLogin from "../page/login/LayoutLogin";

import LayoutUser from "../page/user/LayoutUser";

import UserAboutLayout from "../page/user/user_about/UserAboutLayout";
import UserPastripsLayout from "../page/user/user_pastTrips/UserPastripsLayout";
import UserConnectionsLayout from "../page/user/user_connections/UserConnectionsLayout";
import LoginBrasil from "../page/loginBrasil/LoginBrasil";


// router principal app
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome />,
  },
  {
    path: "/login",
    element: <LayoutLogin />,
  },
  {
    path: "/loginBrasil",
    element: <LoginBrasil />,
  },
  {
    path: "/register",
    element: <div>Register airbnb</div>,
  },
  {
    path: "/user/profile",
    element: <LayoutUser />,
    children: [
      {
        path: "about",
        element: <UserAboutLayout/>,
      },
      {
        path: "past-trips",
        element: <UserPastripsLayout />,
      },
      {
        path: "connections",
        element: <UserConnectionsLayout />,
      },
    ],
  },
]);

export default router;

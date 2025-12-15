import { createBrowserRouter } from "react-router";
import LayoutHome from "../page/home/LayoutHome";
import LayoutLogin from "../page/login/LayoutLogin";

import UserAboutLayout from "../page/user_about/UserAboutLayout";
import UserPastripsLayout from "../page/user_pastTrips/UserPastripsLayout";
import UserConnectionsLayout from "../page/user_connections/UserConnectionsLayout";
import LayoutUser from "../page/user/LayoutUser";


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
    path: "/register",
    element: <div>Register airbnb</div>,
  },
  {
    path: "/user-layout",
    element: <LayoutUser />,
  },
  {
    path: "/user/profile",
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

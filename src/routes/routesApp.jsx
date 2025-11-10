
import { createBrowserRouter } from "react-router";
import LayoutHome from '../page/home/LayoutHome';
import LayoutLogin from "../page/login/LayoutLogin";


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
]);

export default router;

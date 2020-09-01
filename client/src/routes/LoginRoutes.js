import Login from "../pages/Login";
import { LayoutLogin } from "../layouts/layout_login";

const loginRoutes = [
  {
    path: "/admin",
    layout: LayoutLogin,
    component: Login
  }
];

export default loginRoutes;

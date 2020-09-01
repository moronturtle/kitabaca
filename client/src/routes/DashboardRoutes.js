//layout Dashboards

import { LayoutDashboard } from "../layouts/layout_dashboard";

// Route Views
import BlogOverview from "../views/BlogOverview";
import UserProfileLite from "../views/UserProfileLite";
import AddNewPost from "../views/AddNewPost";
import Errors from "../views/Errors";
import ComponentsOverview from "../views/ComponentsOverview";
import Tables from "../views/Tables";
import ManageArticle from "../views/ManageArticle";
import BlogPosts from "../views/BlogPosts";

const DashboardRoutes = [
  {
    path: "/dashboard",
    layout: LayoutDashboard,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: LayoutDashboard,
    component: UserProfileLite
  },
  {
    path: "/add-new-article",
    layout: LayoutDashboard,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: LayoutDashboard,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: LayoutDashboard,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: LayoutDashboard,
    component: Tables
  },
  {
    path: "/manage-article",
    layout: LayoutDashboard,
    component: ManageArticle
  },
  {
    path: "/blog-posts",
    layout: LayoutDashboard,
    component: BlogPosts
  }
];

export default DashboardRoutes;

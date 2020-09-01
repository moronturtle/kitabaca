import NewsNew from "../pages/NewsNew";
import HomeNewsPagesNew from "../pages/HomeNewsPagesNew";
import About from "../pages/About";
import { LayoutNewsPage } from "../layouts/layout_newspage";
import { LayoutNewsPageNew } from "../layouts/layout_newspage_new";

const newsRoutes = [
  {
    path: "/home",
    layout: LayoutNewsPageNew,
    component: HomeNewsPagesNew
  },
  {
    path: "/about",
    layout: LayoutNewsPage,
    component: About
  },
  {
    path: "/news-new",
    layout: LayoutNewsPageNew,
    component: NewsNew
  }
];

export default newsRoutes;

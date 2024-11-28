import Dashboard from "views/Dashboard.js";
import Mangeapps from "views/AppSetting";
import Analytics from "views/Analytics.js";
import User from "views/User";
import Account from "views/Account.js";
import ReviewApps from "views/ReviewApps";
import Payments from "views/Payments.js";
import SocialMedia from "views/SocialMedia";
var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/appsetting",
    name: "App Setting",
    icon: "tim-icons icon-atom",
    component: <Mangeapps />,
    layout: "/admin",
  },
  {
    path: "/Analytics",
    name: "Analytics",
    icon: "tim-icons icon-align-center",
    component: <Analytics />,
    layout: "/admin",
  },
  {
    path: "/payment",
    name: "Payments",
    icon: "tim-icons icon-bell-55",
    component: <Payments />,
    layout: "/admin",
  },
  {
    path: "/reviewapps",
    name: "Review Apps",
    icon: "tim-icons icon-puzzle-10",
    component: <ReviewApps />,
    layout: "/admin",
  },
  {
    path: "/socialmedia",
    name: "Social Media",
    icon: "tim-icons icon-single-02",
    component: <SocialMedia />,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User",
    icon: "tim-icons icon-world",
    component: <User />,
    layout: "/admin",
  },
];
export default routes;

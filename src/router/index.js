import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import Users from "../views/Users";
import Roles from "../views/Roles";
import Admin from "../views/Admin";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    icon: "mdi-home",
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    icon: "mdi-lock",
  },
  {
    path: "/about",
    name: "About",
    icon: "mdi-home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/apply",
    name: "Apply",
    icon: "mdi-pencil-circle",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Apply.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    icon: "mdi-shield-crown",
    roles: ["admin"],
    component: Admin,
    children: [
      {
        path: "/roles",
        name: "Roles",
        icon: "mdi-account-supervisor-circle",
        component: Roles,
      },
      {
        path: "/users",
        name: "Users",
        icon: "mdi-account-circle",
        component: Users,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

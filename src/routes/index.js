import Home from "@/pages/Home"
import Me from "@/pages/Me"
import Hooks from "@/pages/Hooks"
import Parent from "@/pages/Test/props"
import About from "@/pages/Me/About"

console.log(typeof process.env.API)

const routes = [
  {
    path: "/home",
    exact: true,
    component: Home
  },
  {
    path: "/me",
    exact: true,
    component: Me
  },
  {
    path: "/me/:id",
    exact: true,
    component: About
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/hooks",
    component: Hooks
  },
  {
    path: "/test",
    component: Parent
  }
];

export default routes;
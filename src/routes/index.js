import Home from "@/pages/Home"
import Me from "@/pages/Me"
import Test from "@/pages/Test"

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
    path: "/test",
    exact: true,
    component: Test
  }
];

export default routes;
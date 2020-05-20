import Home from "../pages/Home/index"
import Me from "../pages/Me/index"

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
  }
];

export default routes;
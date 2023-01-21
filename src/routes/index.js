import Header from "../templates/header";
import Home from "../pages/home";
import Character from "../pages/character";
import Error404 from "../templates/error.404";

import getHash from "../utils/get.hash";
import resolveRoutes from "../utils/resolve.routes";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  if (header) {
    header.innerHTML = await Header();
  }

  let hash = getHash();
  let route = await resolveRoutes(hash);

  let render = routes[route] ? routes[route] : Error404;

  if (content) {
    content.innerHTML = await render();
  }
};

export default router;

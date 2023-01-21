import Header from "../templates/header";
import Home from "../pages/home";
import Character from "../pages/character";
import Error404 from "../templates/error.404";

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
};

export default router;

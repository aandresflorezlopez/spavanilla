const resolveRoutes = (route) => {
  let validRoute = `/${route}`;
  if (route.length <= 3) {
    validRoute = route === "/" ? route : "/:id";
  }
  return validRoute;
};

export default resolveRoutes;

import { verifyToken } from "../middleWares";
import { default as apiRouter } from "./api";

const router = (app) => {
  app.use(verifyToken);
  app.use("/api/v1", apiRouter);

  // Hello world
  app.use("/", (req, res) => {
    res.send("Route not found!");
  });
};

export default router;

import { default as apiRouter } from "./api";

const router = (app) => {
  app.use("/api/v1", apiRouter);

  // Hello world
  app.use("/", (req, res) => {
    res.send(
      'Hello gaisss, i"am Kiet deleveloper! \n I am currently at Can Tho University!  Nice to meet you! \n'
    );
  });
};

export default router;

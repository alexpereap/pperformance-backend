import homeSlidesRoutes from "../routes/slide.route";
import userRoutes from "../routes/user.route";
import express, { Express } from "express";
import errorHandler from "../middleware/error";

export default async (app: any) => {
  app.use(express.json());

  // routes definitions
  app.use(homeSlidesRoutes);
  app.use(userRoutes);

  app.use(errorHandler);
  return app;
};

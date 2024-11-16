import homeSlidesRoutes from "../routes/slide.route";
import express, { Express } from "express";

export default async (app: any) => {
  app.use(express.json());

  // routes definitions
  app.use(homeSlidesRoutes);

  return app;
};

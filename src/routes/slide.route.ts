import express, { Express, Request, Response } from "express";
import HomeSlideController from "../controllers/homeslide.controller";
const router = express.Router();

router.get("/home-slides", HomeSlideController.getAll);
router.post("/home-slides", HomeSlideController.insert);

export default router;

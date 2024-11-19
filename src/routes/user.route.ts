import express, { Express, Request, Response } from "express";
import userController from "../controllers/user.controller";
const router = express.Router();

router.post("/user", userController.insert);

export default router;

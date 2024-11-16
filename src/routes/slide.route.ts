import express, { Express, Request, Response } from "express";
import { getSlides } from '../controllers/homeslide.controller';
const router = express.Router();


router.get('/slides', getSlides);

module.exports = router;
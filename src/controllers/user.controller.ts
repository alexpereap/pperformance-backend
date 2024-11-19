import express, { Express, Request, Response, NextFunction } from "express";
import services from "../services";
import { StatusCodes } from "http-status-codes";

/**
 * Description
 *
 * @async
 * @function
 * @name insert
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<typeof Response>}
 */
const insert = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;
    const user = await services.userService.insert(username, password);

    res.status(StatusCodes.CREATED).send({ user });
  } catch (e) {
    next(e);
  }
};

export default {
  insert,
};

import express, { Express, Request, Response } from "express";
import services from "./../services";

/**
 * Description
 *
 * @async
 * @function
 * @name getAll
 * @kind variable
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<express.Response<any, Record<string, any>> | Json>}
 */
const getAll = async (req: Request, res: Response) => {
  try {
    const homeSlides = await services.homeslideService.getAll();
    return res.status(201).json({
      data: homeSlides,
      success: true,
    });
  } catch (e) {
    console.error(e);
  }
};

/**
 * Description
 *
 * @async
 * @function
 * @name insert
 * @kind variable
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<express.Response<any, Record<string, any>> | Json>}
 */
const insert = async (req: Request, res: Response) => {
  try {
    const { image, legend, order, position } = req.body;
    const homeSlide = await services.homeslideService.insert(
      image,
      legend,
      order,
      position
    );

    return res.status(201).json({
      data: homeSlide,
      success: true,
    });
  } catch (e) {
    console.error(e);
  }
};

export default {
  getAll,
  insert,
};

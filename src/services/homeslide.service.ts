import express, { Request, Response } from "express";
const db = require("../models");
const { HomeSlide } = db;

/**
 * Home slide services main class
 *
 * @class
 * @name HomeSlideService
 * @kind class
 */
class HomeSlideService {
  /**
   * Gets all home slides
   *
   * @async
   * @method
   * @name getAll
   * @kind property
   * @memberof HomeSlideService
   * @static
   * @returns {Promise<Array>}
   */
  static getAll = async () => {
    try {
      // TODO: sort by order
      // let { sortBy } = req.body;
      // sortBy = typeof sortBy === "undefined" || sortBy === "" ? "id" : sortBy;

      const homeSlides = await HomeSlide.findAll({
        order: [["id", "ASC"]],
      });

      return homeSlides;
    } catch (e) {
      console.error(e);
    }

    return [];
  };

  /**
   * Description
   *
   * @async
   * @method
   * @name insert
   * @kind property
   * @memberof HomeSlideService
   * @static
   * @param {string} image
   * @param {string} legend
   * @param {number} order
   * @param {string} position
   * @returns {Promise<HomeSlide>}
   */
  static insert = async (
    image: string,
    legend: string,
    order: number,
    position: string
  ) => {
    const homeSlide = await HomeSlide.create({
      image,
      legend,
      order: order || 0,
      position: position || "none",
    });

    return homeSlide;
  };
}

export default HomeSlideService;

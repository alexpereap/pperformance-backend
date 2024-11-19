const db = require("../models");
const { User } = db;
import ApiError from "../utils/ApiError";
import { StatusCodes } from "http-status-codes";

/**
 * Class for handling user services
 *
 * @class
 * @name UserService
 * @kind class
 */
class UserService {
  /**
   * Inserts user
   *
   * @async
   * @method
   * @name insert
   * @kind method
   * @memberof UserService
   * @static
   * @param {string} username
   * @param {string} password
   * @returns {Promise<User>}
   */
  static insert = async (username: string, password: string) => {
    // checks if already exists
    const existentUser = await User.findOne({
      where: {
        username,
      },
    });

    if (existentUser !== null) {
      throw new ApiError(StatusCodes.BAD_REQUEST, "Email is already taken");
    }

    // inserts user
    const user = await User.create({
      username,
      password,
    });

    return user;
  };
}

export default UserService;

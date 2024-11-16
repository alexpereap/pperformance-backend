'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomeSlide extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HomeSlide.init({
    image: DataTypes.STRING,
    legend: DataTypes.STRING,
    position: DataTypes.ENUM('none', 'left', 'right', 'top', 'bottom')
  }, {
    sequelize,
    modelName: 'HomeSlide',
  });
  return HomeSlide;
};
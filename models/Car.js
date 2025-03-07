import { DataTypes } from "sequelize";

import db from '../db/conn.js';

const Car = db.define('Car', {
  model: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  },
  licensePlate: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  },
  rentalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
    require: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true
  }
})

export default Car;
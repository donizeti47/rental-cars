import Car from "../models/Car.js";

class CarController {
  static async createCar(req, res) {
    const car = {
      model: req.body.model,
      color: req.body.color,
      licensePlate: req.body.licensePlate,
      rentalPrice: req.body.rentalPrice,
      category: req.body.category
    }

    try {
      await Car.create(car)
      res.status(200).json('Carro adicionado.');
    } catch (error) {
      console.log('Não foi possível completar a ação.', + error)
    }
  }
}

export default CarController;

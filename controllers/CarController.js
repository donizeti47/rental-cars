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
  static async listAllCars(req, res) {
    const allCars = await Car.findAll()

    // const carObj = allCars.map(item => item.get())
    const carObj = JSON.parse(JSON.stringify(allCars))

    res.status(302).json(carObj)
  }
}

export default CarController;

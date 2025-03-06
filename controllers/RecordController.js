import Car from '../models/Car.js'
import Record from '../models/Record.js'

class RecordController {
  static async rentCar(req, res) {
    const record = {
      plate: req.body.plate,
      initialDate: req.body.initialDate,
      finalDate: req.body.finalDate,
    }

    const availableCar = await Car.findOne({
      where: {
        licensePlate: record.plate,
      },
      raw: true,
    })

    const availableCarObj = JSON.parse(JSON.stringify(availableCar))

    if (availableCarObj == null) {
      res
        .status(404)
        .json('Carro não encontrado na tabela de carros disponíveis')
      return
    } else {
      console.log(` Carro encontrado: ${availableCarObj.licensePlate} `)
    }

    if (availableCarObj.licensePlate == record.plate) {
      try {
        const isCarRented = await Record.findOne({
          where: {
            plate: record.plate,
          },
        })

        if (isCarRented) {
          res.json('Esse carro já está alugado')
          return
        }

        await Record.create(record)

        res.status(302).json(availableCar)
      } catch (error) {
        console.log('Opa, tivemos um erro', +error)
      }
    }
  }
}

export default RecordController
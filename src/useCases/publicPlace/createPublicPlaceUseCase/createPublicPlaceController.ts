import { Request, Response } from "express";
import { CreatePublicPlaceUseCase } from "./createPublicPlaceUseCase";
import { Errors } from "middlewares/errors";
import { z } from "zod";

class CreatePublicPlaceController {
  public async execute(request: Request, response: Response) {
    try {
      const { cep, neighborhood, numberOfHouse, road, costumerId } = request.body;

      if (!cep || !neighborhood || !numberOfHouse || !road) {
        Errors({
          message: "All fields are required",
          status: "alert",
          statusCode: 400,
          response: response
        })
      }

      const createPublicPlaceUseCase = new CreatePublicPlaceUseCase({ cep, costumerId, neighborhood, numberOfHouse, road })
      const publicPlace = await createPublicPlaceUseCase.getCep();

      return response.status(201).send({
        message: "Created with sucess",
        status: "sucess",
        logadouro: {
          id: publicPlace.id,
          cep: publicPlace.cep,
          bairro: publicPlace.neighborhood,
          rua: publicPlace.road,
          numeroDaCasa: publicPlace.numberOfHouse,
        }
      })
    } catch (error) {
      response.status(500).send({
        message: "Failed to create CEP",
        error: error,
        status: "error"
      })
    }
  }
}

export { CreatePublicPlaceController }

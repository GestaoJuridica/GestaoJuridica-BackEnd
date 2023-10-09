import { Request, Response } from "express";
import { UpdatedPublicPlaceUseCase } from "./updatedPublicPlaceUseCase";
import { Errors } from "middlewares/errors";
import { z } from "zod";

class UpdatedPublicPlaceController {
  public async execute(request: Request, response: Response) {
    try {

      const costumerIdParse = z.string()
      const costumerId = costumerIdParse.parse(request.params);

      const { cep, neighborhood, numberOfHouse, road, id } = request.body;

      if (!cep || !costumerId || !neighborhood || !numberOfHouse || !road || !id) {
        Errors({
          message: "All fields are required",
          status: "alert",
          statusCode: 400,
          response: response
        })
      }

      const updatedPublicPlaceUseCase = new UpdatedPublicPlaceUseCase({ cep, clientId: costumerId, neighborhood, numberOfHouse, road, id });

      return response.status(200).send({
        message: "Updated with sucess",
        status: "sucess",
      })
    } catch (error) {
      response.status(500).send({
        message: "Failed to updated",
        status: "error",
        error: error
      })
    }
  }
}

export { UpdatedPublicPlaceController }

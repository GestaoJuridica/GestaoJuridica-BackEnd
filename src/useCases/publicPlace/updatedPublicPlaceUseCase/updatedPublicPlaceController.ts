import { Request, Response } from "express";
import { UpdatedPublicPlaceUseCase } from "./updatedPublicPlaceUseCase";
import { Errors } from "middlewares/errors";

class UpdatedPublicPlaceController {
  public async execute(request: Request, response: Response) {
    try {

      const { cep, clientsId, neighborhood, numberOfHouse, road, id } = request.body;

      if (!cep || !clientsId || !neighborhood || !numberOfHouse || !road || !id) {
        Errors({
          message: "All fields are required",
          status: "alert",
          statusCode: 400,
          response: response
        })
      }

      const updatedPublicPlaceUseCase = new UpdatedPublicPlaceUseCase({ cep, clientsId, neighborhood, numberOfHouse, road, id });

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
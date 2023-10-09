import { Request, Response } from "express";
import { GetPublicPlaceUseCase } from "./getPublicPlaceUseCase";
import { z } from "zod";

class GetPublicPlaceController {
  public async execute(request: Request, response: Response) {
    try {
      const costumerIdParse = z.string()

      const costumerId = costumerIdParse.parse(request.params.id);

      const getPublicPlaceUseCase = new GetPublicPlaceUseCase(costumerId);
      const place = await getPublicPlaceUseCase.get();

      return response.status(200).send({
        message: "Sucess",
        status: "sucess",
        CEP: place
      })

    } catch (error) {
      response.status(404).send({
        message: "Cep not found",
        status: "error",
        error: error
      })
    }
  }
}

export { GetPublicPlaceController }

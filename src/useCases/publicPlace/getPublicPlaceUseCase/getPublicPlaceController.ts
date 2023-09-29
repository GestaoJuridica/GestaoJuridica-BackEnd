import { Request, Response } from "express";
import { GetPublicPlaceUseCase } from "./getPublicPlaceUseCase";

class GetPublicPlaceController {
  public async execute(request: Request, response: Response) {
    try {

      const { clientId } = request.body;

      const getPublicPlaceUseCase = new GetPublicPlaceUseCase(clientId);
      const place = await getPublicPlaceUseCase.get();

      return response.status(200).send({
        message: "Sucess",
        status: "sucess",
        CEP: { place }
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
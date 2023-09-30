import { Request, Response } from 'express';
import { UpdateClientUseCase } from './updateClientUseCase';
import { Errors } from 'middlewares/errors';

class UpdatedClientController {
  private async updateClient(request: Request, response: Response) {
    try {
      const { id } = request.body;
      const { name, cpf, cellNumber } = request.body;

      if (!id) {
        Errors({
          message: "ID is",
          status: "alert",
          statusCode: 400,
          response: response
        })
      }

      if (!name || !cpf || !cellNumber) {
        Errors({
          message: "All field are required",
          status: "alert",
          statusCode: 400,
          response: response
        })
      }

      const updateClientUseCase = new UpdateClientUseCase({
        id,
        name,
        cpf,
        cellNumber,
      });
      await updateClientUseCase.getUpdated();

      response.status(200).send({
        message: 'Cliet updated',
        status: 'sucess',
      });
    } catch (error) {
      response.status(500).send({
        message: 'Internal Server Error',
        status: 'error',
      });
    }
  }

  get UpdateClient() {
    return this.updateClient;
  }
}

export { UpdatedClientController };

import { Request, Response } from 'express';
import { CreateClientUseCase } from './createClientUseCase';
import { Errors } from 'middlewares/errors';

class CreateClientsController {
  private async createdClients(request: Request, response: Response) {
    try {

      const { cpf, name, cellNumber, } = request.body;
      if (!cpf || !name || !cellNumber) {
        Errors({
          message: "All field are required",
          status: "alert",
          statusCode: 400,
          response: response
        })
      }

      const createClientsUseCase = new CreateClientUseCase({
        cpf,
        name,
        cellNumber,
        description: ""
      });

      response.status(201).send({
        message: 'Client created with sucess',
        status: 'sucess',
      });
    } catch (error) {
      response.status(500).send({
        message: `Internal Server Error, ${error}`,
        status: 'error',
      });
    }
  }

  get createdClient() {
    return this.createdClients;
  }
}

export { CreateClientsController };

import { SearchClientsUseCase } from './searchClientsUseCase'
import { Request, Response } from 'express';
import { z } from 'zod';

class SearchClientsController {
  private async handle(request: Request, response: Response) {
    try {
      const searchRequestProps = z.object({
        userName: z.string().min(3, { message: "userName is invalid" }).max(254),
        logadouro: z.string().min(8).max(254),
        cpf: z.string().min(11).max(254),
        courtProcess: z.string(),
        skipPagination: z.number(),
        takePagination: z.number()
      })

      const { userName, logadouro, cpf, courtProcess, skipPagination, takePagination } = searchRequestProps.parse(request.body)

      const searchClientesUseCase = new SearchClientsUseCase({ userName, logadouro, cpf, courtProcess, skipPagination, takePagination })
      const clientFound = await searchClientesUseCase.searchClients();

      response.status(200).send({
        client: {
          clientFound
        },
        status: 'sucess'
      })
    } catch (error) {
      response.status(500).send({
        message: "Internal server error",
        status: 'error'
      })
    }
  }

  get search() {
    return this.handle
  }
}

export { SearchClientsController }
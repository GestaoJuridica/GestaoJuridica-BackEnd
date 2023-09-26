import { dataBase } from 'dataBase/dataBase'

import { SearchClientsUseCaseProps } from 'interfaces/useCases/clients/searchClientesUseCaseProps'

class SearchClientsUseCase {

  private userName: string
  private logadouro: string
  private cpf: string
  private courtProcess: string
  private skipPagination: number
  private takePagination: number


  constructor({ userName, logadouro, cpf, courtProcess, skipPagination, takePagination }: SearchClientsUseCaseProps) {
    this.userName = userName;
    this.logadouro = logadouro;
    this.cpf = cpf;
    this.courtProcess = courtProcess;
    this.skipPagination = skipPagination
    this.takePagination = takePagination
  }

  private async execute(): Promise<unknown> {
    try {

      const client = await dataBase.clients.findMany({
        select: {
          name: true,
          cellNumber: true,
          cpf: true,
          id: true,
          photos: true,
        },
        where: {
          cpf: {
            contains: this.cpf
          },
          logadouro: {
            contains: this.logadouro
          },
          name: {
            contains: this.userName,
          }
        },
        take: this.takePagination,
        skip: this.skipPagination
      })

      return client

    } catch (error) {
      throw new Error("Invalid field")
    }
  }

  get searchClients() {
    return this.execute
  }
}

export { SearchClientsUseCase }
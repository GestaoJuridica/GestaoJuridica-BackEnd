import { dataBase } from 'dataBase/dataBase'

import { SearchClientsUseCaseProps } from 'interfaces/useCases/clients/searchClientesUseCaseProps'

class SearchClientsUseCase {

  private userName: string
  private cpf: string
  private skipPagination: number
  private takePagination: number

  constructor({ userName, cpf, skipPagination, takePagination }: SearchClientsUseCaseProps) {
    this.userName = userName;
    this.cpf = cpf;
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
        },
        where: {
          cpf: {
            contains: this.cpf
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

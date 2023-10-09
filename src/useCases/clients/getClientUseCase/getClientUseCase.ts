import { dataBase } from 'dataBase/dataBase';
import { getClientsUseCaseProps } from 'interfaces/useCases/clients/getClientUseCase';

class GetClientsUseCase implements getClientsUseCaseProps {
  public async getAllClients(): Promise<unknown[]> {
    const allClients = await dataBase.clients.findMany({
      select: {
        id: true,
        cellNumber: true,
        cpf: true,
        name: true,
        photo: true,
        place: true,
        createdAt: false,
        updatedAt: false,
      },
    });

    return allClients;
  }

  public async getClient(id: string): Promise<unknown> {
    const client = await dataBase.clients.findFirst({
      where: {
        id: id
      },
      select: {
        name: true,
        cellNumber: true,
        cpf: true,
        createdAt: false,
        updatedAt: false,
        photo: true,
        place: true,
        id: true
      }
    })

    return { client: client };
  }
}

export { GetClientsUseCase };

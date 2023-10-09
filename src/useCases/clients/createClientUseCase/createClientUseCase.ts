import { dataBase } from 'dataBase/dataBase';

interface createUserProps {
  name: string,
  cpf: string,
  cellNumber: string,
  description: string
}

class CreateClientUseCase {

  private name: string;
  private cpf: string;
  private cellNumber: string;
  private description: string


  constructor({ name, cpf, cellNumber, description }: createUserProps) {
    this.name = name;
    this.cpf = cpf;
    this.cellNumber = cellNumber;
    this.description = description;

    this.createClients();
  }

  private async createClients(): Promise<unknown> {
    const createdClient = await dataBase.clients.create({
      data: {
        cellNumber: this.cellNumber,
        cpf: this.cpf,
        name: this.name,
      }
    });

    return createdClient;
  }
}

export { CreateClientUseCase };

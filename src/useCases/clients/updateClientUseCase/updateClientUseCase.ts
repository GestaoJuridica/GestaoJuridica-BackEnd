import { dataBase } from 'dataBase/dataBase';
interface updatedClientProps {
  id: string,
  name: string,
  cpf: string,
  cellNumber: string,
}

class UpdateClientUseCase {

  private id: string;
  private name: string;
  private cpf: string;
  private cellNumber: string;

  constructor({ cellNumber, cpf, id, name }: updatedClientProps) {
    this.name = name;
    this.cpf = cpf;
    this.id = id;
    this.cellNumber = cellNumber;
  }

  private async updateClient(): Promise<unknown> {
    const updatedClient = await dataBase.clients.update({
      where: {
        id: this.id,
      },
      data: {
        cellNumber: this.cellNumber,
        cpf: this.cpf,
        name: this.name,
      },
    });

    return updatedClient;
  }

  public getUpdated() {
    return this.updateClient();
  }
}

export { UpdateClientUseCase };

import { dataBase } from 'dataBase/dataBase';
import { CreateClientUseCaseProps } from 'interfaces/useCases/clients/createClientUseCase';

interface createUserProps {
	name: string,
	cpf: string,
	cellNumber: string,
}

class CreateClientUseCase {

	private name: string;
	private cpf: string;
	private cellNumber: string;


	constructor({ name, cpf, cellNumber }: createUserProps) {
		this.name = name;
		this.cpf = cpf;
		this.cellNumber = cellNumber;

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

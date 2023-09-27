import { dataBase } from 'dataBase/dataBase';
import { CreateClientUseCaseProps } from 'interfaces/useCases/clients/createClientUseCase';

interface createUserProps {
	name: string,
	cpf: string,
	cellNumber: string,
	logadouro: string,
	photos: string,
}

class CreateClientUseCase {

	private name: string;
	private cpf: string;
	private cellNumber: string;
	private logadouro: string;
	private photos: string;

	constructor({ name, cpf, cellNumber, logadouro, photos }: createUserProps) {
		this.name = name;
		this.cpf = cpf;
		this.cellNumber = cellNumber;
		this.logadouro = logadouro;
		this.photos = photos;

		this.createClients();
	}

	private async createClients(): Promise<unknown> {
		const createdClient = await dataBase.clients.create({
			data: {
				cellNumber: this.cellNumber,
				cpf: this.cpf,
				logadouro: this.logadouro,
				name: this.name,
			}
		});

		return createdClient;
	}

	// public getCreateClient() {
	// 	return this.createClients();
	// }
}

export { CreateClientUseCase };

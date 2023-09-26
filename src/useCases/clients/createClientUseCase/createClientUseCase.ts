import { dataBase } from 'dataBase/dataBase';
import { CreateClientUseCaseProps } from 'interfaces/useCases/clients/createClientUseCase';

class CreateClientUseCase implements CreateClientUseCaseProps {
	public async createClients(
		name: string,
		cpf: string,
		cellNumber: string,
		logadouro: string,
		photos: string,
	): Promise<unknown> {
		const createdClient = await dataBase.clients.create({
			data: {
				cellNumber: cellNumber,
				cpf: cpf,
				logadouro: logadouro,
				name: name,
				photos: photos,
			}
		});

		return createdClient;
	}
}

export { CreateClientUseCase };

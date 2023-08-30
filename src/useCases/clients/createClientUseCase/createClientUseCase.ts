import { dataBase } from 'dataBase/dataBase';
import { CreateClientUseCaseProps } from 'interfaces/useCases/clients/createClientUseCase';

class CreateClientUseCase implements CreateClientUseCaseProps {
	public async createClients(
		name: string,
		cpf: string,
		cellNumber: string,
		logadouro: string,
		photos?: string | undefined,
		userId?: string | undefined
	): Promise<unknown> {
		const createdClient = await dataBase.clients.create({
			data: {
				cellNumber,
				cpf,
				logadouro,
				name,
				photos: String(photos),
				userId: String(userId),
			},
			select: {
				photos: true,
				cellNumber: true,
				cpf: true,
				logadouro: true,
				name: true,
				id: false,
				userId: false,
			},
		});

		return createdClient;
	}
}

export { CreateClientUseCase };

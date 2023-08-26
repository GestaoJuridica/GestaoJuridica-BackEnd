import { dataBase } from 'dataBase/dataBase';
import { UpdatedClientUseCaseProps } from 'interfaces/useCases/users/updatedUserUseCase';

class UpdateClientUseCase implements UpdatedClientUseCaseProps {
	public async updatedClient(
		id: string,
		name: string,
		cpf: string,
		cellNumber: string,
		logadouro: string,
		photos?: string
	): Promise<unknown> {
		const updatedClient = await dataBase.clients.update({
			where: {
				id: id,
			},
			data: {
				cellNumber: cellNumber,
				cpf: cpf,
				logadouro: logadouro,
				name: name,
				photos: photos,
			},
		});

		return updatedClient;
	}
}

export { UpdateClientUseCase };

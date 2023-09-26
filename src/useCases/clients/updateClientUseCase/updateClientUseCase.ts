import { dataBase } from 'dataBase/dataBase';
import { UpdateCLientUseCaseProps } from 'interfaces/useCases/clients/updateCLientUseCaseProps'

class UpdateClientUseCase implements UpdateCLientUseCaseProps {
	public async updateClient(id: string, name: string, cpf: string, cellNumber: string, logadouro: string, photos: string): Promise<unknown> {
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

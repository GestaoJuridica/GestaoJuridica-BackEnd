import { dataBase } from 'dataBase/dataBase';
import { DeleteClientUseCaseProps } from 'interfaces/useCases/clients/deleteClientUseCaseProps';

class DeleteClientUseCase implements DeleteClientUseCaseProps {
	public async deleteClient(id: string): Promise<unknown> {
		const userDeleted = await dataBase.clients.delete({
			where: {
				id: id,
			},
		});

		return userDeleted;
	}
}
export { DeleteClientUseCase };

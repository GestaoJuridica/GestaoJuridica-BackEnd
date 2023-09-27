import { dataBase } from 'dataBase/dataBase';

class DeleteClientUseCase{

	private clientId: string;

	constructor (id:string) {
		this.clientId = id;
	}

	private async deleteClient(): Promise<unknown> {
		const userDeleted = await dataBase.clients.delete({
			where: {
				id: this.clientId
			},
		});

		return userDeleted;
	}

	public getDelete() {
		return this.deleteClient();
	}
}
export { DeleteClientUseCase };

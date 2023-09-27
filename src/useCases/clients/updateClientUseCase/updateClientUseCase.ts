import { dataBase } from 'dataBase/dataBase';
interface updatedClientProps {
	id: string,
	name: string,
	cpf: string,
	cellNumber: string,
	logadouro: string,
	photos: string
}

class UpdateClientUseCase {

	private id: string;
	private name: string;
	private cpf: string;
	private cellNumber: string;
	private logadouro: string;
	private photos: string;

	constructor({ cellNumber, cpf, id, logadouro, name, photos }: updatedClientProps) {
		this.name = name;
		this.cpf = cpf;
		this.id = id;
		this.cellNumber = cellNumber;
		this.logadouro = logadouro;
		this.photos = photos;
	}

	private async updateClient(): Promise<unknown> {
		const updatedClient = await dataBase.clients.update({
			where: {
				id: this.id,
			},
			data: {
				cellNumber: this.cellNumber,
				cpf: this.cpf,
				logadouro: this.logadouro,
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

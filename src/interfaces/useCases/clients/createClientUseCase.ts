import { Client } from '@prisma/client/runtime/library';

interface CreateClientUseCaseProps {
	createClients: (
		name: string,
		cpf: string,
		cellNumber: string,
		logadouro: string,
		photos: string,
		userId: string
	) => Promise<unknown>;
}

export { CreateClientUseCaseProps };

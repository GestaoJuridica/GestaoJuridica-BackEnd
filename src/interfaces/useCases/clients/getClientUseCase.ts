import { Client } from '@prisma/client/runtime/library';

interface getClientsUseCaseProps {
	getAllClients: () => Promise<unknown[]>;
	getClient: (id: string) => Promise<unknown>;
}

export { getClientsUseCaseProps };

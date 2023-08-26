import { User } from '@prisma/client';

interface GetUSerUseCaseProps {
	getAllUsers: () => Promise<unknown[]>;
	getUserByEmail: (email: string) => Promise<unknown>;
}

export { GetUSerUseCaseProps };

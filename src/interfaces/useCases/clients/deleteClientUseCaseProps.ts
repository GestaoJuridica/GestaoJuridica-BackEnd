interface DeleteClientUseCaseProps {
	deleteClient: (id: string, userId: string) => Promise<unknown>;
}

export { DeleteClientUseCaseProps };

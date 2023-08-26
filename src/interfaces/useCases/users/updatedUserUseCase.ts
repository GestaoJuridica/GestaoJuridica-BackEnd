interface UpdatedClientUseCaseProps {
	updatedClient: (
		id: string,
		name: string,
		cpf: string,
		cellNumber: string,
		logadouro: string,
		photos?: string
	) => Promise<unknown>;
}

export { UpdatedClientUseCaseProps };

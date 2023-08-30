import { handleErrorsProps } from 'interfaces/handleErrors';

export function handleError({ req, res, error, next }: handleErrorsProps) {
	if (error) {
		res.status(500).json({
			message: error.message,
		});
		return error;
	}

	next();
}

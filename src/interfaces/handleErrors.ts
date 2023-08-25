import { NextFunction, Request, Response } from 'express';

interface handleErrorsProps {
	req: Request;
	res: Response;
	next: NextFunction;
	error: Error;
}

export { handleErrorsProps };

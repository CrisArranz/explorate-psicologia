import { Request, Response, NextFunction } from 'express';
import createHttpError from "http-errors";

const isLogged = (req: Request, res: Response, next: NextFunction) => {
	if (!req.session || !req.session?.employeeId) {
		return next(createHttpError(401, 'Unauthorized: No active session'));
	}
	next();
};

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
	if (!req.employee?.isAdmin) {
		return next(createHttpError(403, 'Forbidden: Admins only'));
	}
	next();
};

export {
	isLogged,
	isAdmin
}
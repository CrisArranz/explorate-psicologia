import { Request, Response, NextFunction } from 'express';
import expressSesion from 'express-session';
import MongoStore from 'connect-mongo';

import { EmployeeModel } from '../../models/employee/employee.model';

const sessionConfig = expressSesion({
	secret: process.env.SESSION_SECRET ?? 'default explorate psicologia secret',
	resave: false,
	saveUninitialized: false,
	store: MongoStore.create({
		mongoUrl: process.env.DATABASE_ATLAS_URI ?? '',
		ttl: 24 * 60 * 60, // 1 day
	}),
	cookie: {
		secure: process.env.SESSION_SECURE === 'true',
		httpOnly: true,
		maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
	},
});

const loadEmployee = async (req: Request, res: Response, next: NextFunction) => {
	const { employeeId } = req.session;
	if (employeeId) {
		try {
			const employee = await EmployeeModel.findById(employeeId);
			req.employee = employee;
		} catch (error) {
			return next(error);
		}
	}
	next();
};

export {
	sessionConfig,
	loadEmployee
}
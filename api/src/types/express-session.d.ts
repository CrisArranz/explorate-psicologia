import 'express-session';
import { Employee } from '../models/employee/employee.model';

declare module 'express-session' {
	interface SessionData {
		employeeId?: Pick<Employee, '_id'>;
	}
}

import 'express';
import { Employee } from '../models/employee/employee.model';

declare module 'express' {
    interface Request {
        employee?: Employee;
    }
}

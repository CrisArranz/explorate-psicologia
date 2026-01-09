import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";

import { EmployeeModel } from "../../models/employee/employee.model";

const login = async (req: Request, res: Response, next: NextFunction) => {
  function invalidCredentials() {
    return next(createHttpError(401, {
      message: 'Invalid email or password',
      error: { password: { message: 'Invalid password' } }
    }));
  }

  const { email, password } = req.body;

  const employee = await EmployeeModel.findOne({ email: email }).select('+password');
  if (!employee) {
    return invalidCredentials();
  }

  const isPasswordValid = await employee.comparePassword(password);
  if (!isPasswordValid) {
    return invalidCredentials();
  }

  req.session!.employeeId = employee._id.toString();
  res.status(200).json({ message: 'Login successful' });
}

export {
  login
}
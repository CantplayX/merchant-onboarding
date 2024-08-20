import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("An error occurred:", err.message);
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err.message });
};

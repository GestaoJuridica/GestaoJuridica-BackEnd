import { Response } from "express";

interface ErrorsProps {
  message: string,
  status: string,
  statusCode: number
  response: Response
}

export function Errors({ message, status, statusCode, response }: ErrorsProps) {
  let error = response.status(statusCode).send({
    message: message,
    status: status
  })

  return error;
}
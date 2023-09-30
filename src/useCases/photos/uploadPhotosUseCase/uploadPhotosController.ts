import { Request, Response } from "express";
import { UploadPhotosUseCase } from "./uploadPhotosUseCase";
import { Errors } from "middlewares/errors";

class UploadPhotosController {

  public execute(request: Request, response: Response) {
    try {

      const { clientId } = request.body;
      const image = request.file?.buffer.toString();

      if (!clientId) {
        Errors({
          message: "Client Id is required",
          status: "alert",
          statusCode: 400,
          response: response
        })
      }

      if (!image) {
        Errors({
          message: "Image is required",
          status: "alert",
          statusCode: 400,
          response: response
        })
      }

      if (image) {
        const imageUrl = image;
        const uploadImageuseCase = new UploadPhotosUseCase({ clientId, imageUrl });
      }

      return response.status(201).send({
        message: "Photo as upload with sucess",
        status: 'sucess',
      })
    } catch (error) {
      response.status(500).send({
        message: "Failed to upload this image",
        status: 'error',
        error: error
      })
    }
  }
}

export { UploadPhotosController }

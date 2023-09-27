import { Request, Response } from "express";
import { CreatePhotosUseCase } from "./createPhotosUseCase";
import { Errors } from "middlewares/errors";

class CreatePhotosController {

  public async handle(request: Request, response: Response) {
    try {

      const { urlPhoto, clientId } = request.body;

      if (!urlPhoto || !clientId) {
        Errors({
          message: "All field are required",
          status: "alert",
          statusCode: 400,
          response: response
        })
      }

      const createPhotosUseCase = new CreatePhotosUseCase(urlPhoto, clientId);
      const photo = await createPhotosUseCase.getCreatePhotos();

      return response.status(201).send({
        message: "Photo created with sucess",
        status: "sucess",
        photo: photo ? photo.url : null
      })

    } catch (error) {
      response.status(500).send({
        message: "Failed to created a photo",
        status: "error"
      })
    }
  }
}

export { CreatePhotosController }
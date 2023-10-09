import { Errors } from "middlewares/errors";
import { GetPhotosUseCase } from "./getPhotosUseCase";
import { Request, Response } from 'express'
import { z } from "zod";

class GetPhotoController {
  public async handlePhoto(request: Request, response: Response) {
    try {

      const clientIdParse = z.string()
      const clientId = clientIdParse.parse(request.params.id);
      const { imageId } = request.body;

      if (!imageId) {
        Errors({
          statusCode: 400,
          message: "Photo Id is required",
          status: "alert",
          response: response
        })
      }

      const getPhotosUseCase = new GetPhotosUseCase({ imageId, clientId });
      const photo = await getPhotosUseCase.getPhoto();

      return response.status(200).send({
        photo: photo,
        status: "sucess"
      })

    } catch (error) {
      Errors({
        statusCode: 500,
        message: "Failed to get costumer photos",
        status: "error",
        response: response
      })
    }
  }

  public async handleAllPhoto(request: Request, response: Response) {
    try {

      const clientIdParse = z.string()
      const clientId = clientIdParse.parse(request.params.id);

      console.log({ "clientId": clientId })
      const getPhotosUseCase = new GetPhotosUseCase({ clientId, imageId: "" });
      const photo = await getPhotosUseCase.getAllPhotos();

      return response.status(200).send({
        photo: photo,
        status: "sucess"
      })

    } catch (error) {
      Errors({
        statusCode: 400,
        message: "Failed to get all costumer photos",
        status: "error",
        response: response
      })
    }
  }
}

export { GetPhotoController }

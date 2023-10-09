import { Request, Response } from "express";
import { DeletePhotoUseCase } from "./deletePhotoUseCase";
import { Errors } from "middlewares/errors";


class DeletePhotoController {
  public async handle(request: Request, response: Response) {
    try {
      const clientId = request.params.id;
      const { imageId } = request.body;

      if (!imageId) {
        Errors({
          message: "All field are required",
          status: "alert",
          statusCode: 400,
          response: response
        })
      }

      const deletePhotoUseCase = new DeletePhotoUseCase({ imageId, clientId });
      await deletePhotoUseCase.getDelete();

      return response.status(200).send({
        message: "Photo deleted with sucess",
        status: "sucess"
      })

    } catch (error) {
      response.status(500).send({
        message: "Failed to delete photo",
        status: "error"
      })
    }
  }
}

export { DeletePhotoController }

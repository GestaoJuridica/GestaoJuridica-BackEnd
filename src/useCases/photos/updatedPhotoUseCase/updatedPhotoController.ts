import { Response, Request } from "express";
import { UpdatedPhotoUseCase } from "./updatedPhotoUseCase";
import { Errors } from "middlewares/errors";

class UpdatedPhotoController {
  public async handle(request: Request, response: Response) {
    try {

      const { id, url, clientId } = request.body;

      if (!id || !url) {
        Errors({
          message: "All field are required",
          status: "alert",
          statusCode: 400,
          response: response
        })
      }

      const updatedPhotoUseCase = new UpdatedPhotoUseCase(id, url, clientId);

      response.status(200).send({
        message: "Updated Image with sucess",
        status: "sucess",
      })

    } catch (error) {
      response.status(500).send({
        message: "Failed to updated image",
        status: "error"
      })
    }
  }
}

export { UpdatedPhotoController }
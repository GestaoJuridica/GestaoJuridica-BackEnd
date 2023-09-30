import { dataBase } from "dataBase/dataBase";

interface UploadPhotosUseCaseProps {
  clientId: string,
  imageUrl: string
}

class UploadPhotosUseCase {
  private clienteId: string
  private imageURL: string

  constructor({ clientId, imageUrl }: UploadPhotosUseCaseProps) {
    this.clienteId = clientId;
    this.imageURL = imageUrl;

    this.uploadImage();
  }

  private async uploadImage() {
    const imageUrl = await dataBase.photo.create({
      data: {
        clientsId: this.clienteId,
        url: this.imageURL
      }
    })

    return imageUrl;
  }
}

export { UploadPhotosUseCase }

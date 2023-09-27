import { dataBase } from "dataBase/dataBase";

interface DeletePhotoUseCaseProps {
  imageId: number,
  clientId: string,
}

class DeletePhotoUseCase {
  private imageId: number;
  private clientId: string;

  constructor({ clientId, imageId }: DeletePhotoUseCaseProps) {
    this.imageId = imageId
    this.clientId = clientId
  }

  private async deletePhoto() {
    const photo = await dataBase.photo.delete({
      where: {
        clientsId: this.clientId,
        id: this.imageId
      }
    })

    return photo
  }

  public getDelete() {
    return this.deletePhoto();
  }
}

export { DeletePhotoUseCase }
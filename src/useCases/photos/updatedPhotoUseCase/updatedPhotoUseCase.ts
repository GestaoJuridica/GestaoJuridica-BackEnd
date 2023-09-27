import { dataBase } from "dataBase/dataBase";

class UpdatedPhotoUseCase {
  private id: number;
  private urlImage: string;
  private clientId: string;

  constructor(id: number, url: string, clientId: string) {
    this.id = id;
    this.urlImage = url;
    this.clientId = clientId

    this.updatedPhoto();
  }

  private async updatedPhoto() {
    const photo = await dataBase.photo.update({
      where: {
        clientsId: this.clientId,
        id: this.id,
      },
      data: {
        url: this.urlImage
      }
    })

    return photo;
  }
}

export { UpdatedPhotoUseCase }
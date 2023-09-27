import { dataBase } from "dataBase/dataBase";

class CreatePhotosUseCase {
  private urlPhoto: string;
  private clientId: string;

  constructor(urlPhoto: string, clientId: string) {
    this.urlPhoto = urlPhoto;
    this.clientId = clientId;
  }

  private async createPhotos() {
    const photos = await dataBase.photo.create({
      data: {
        url: this.urlPhoto,
        clientsId: this.clientId
      }
    })

    return photos
  }

  public getCreatePhotos() {
    return this.createPhotos();
  }

}

export { CreatePhotosUseCase }
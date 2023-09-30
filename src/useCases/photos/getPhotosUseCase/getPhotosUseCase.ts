import { dataBase } from "dataBase/dataBase"

interface GetPhotoProps {
  imageId: string;
  clientId: string;
}

class GetPhotosUseCase {

  private imageId: string;
  private clientId: string;

  constructor({ imageId, clientId }: GetPhotoProps) {
    this.imageId = imageId;
    this.clientId = clientId;
  }

  private async Photo() {
    const photo = await dataBase.photo.findFirst({
      where: {
        id: this.imageId
      },
      select: {
        url: true,
        clientsId: true,
        createdAt: false,
        updatedAt: false,
        id: false
      }
    })

    return photo;
  }

  private async AllPhotos() {
    const photo = await dataBase.photo.findMany({
      where: {
        clientsId: this.clientId
      },
      select: {
        url: true,
        id: true,
        Clients: true,
        createdAt: false,
        updatedAt: false
      }
    })
    return photo
  }

  public getPhoto() {
    return this.Photo();
  }

  public getAllPhotos() {
    return this.AllPhotos();
  }
}

export { GetPhotosUseCase }

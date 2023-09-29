import { dataBase } from "dataBase/dataBase";

class GetPublicPlaceUseCase {
  private clientId: string;

  constructor(clientId: string) {
    this.clientId = clientId;
  }

  private async getPublicPlase() {
    try {

      const publicPlace = await dataBase.place.findFirst({
        where: {
          clientsId: this.clientId
        }
      })

      return publicPlace;

    } catch (error) {
      throw new Error(JSON.stringify({ Error: error }))
    }
  }

  public get() {
    return this.getPublicPlase();
  }
}

export { GetPublicPlaceUseCase }
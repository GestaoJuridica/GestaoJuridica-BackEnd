import { dataBase } from "dataBase/dataBase"

interface CreatePublicPlaceUseCaseProps {
  cep: string,
  neighborhood: string,
  numberOfHouse: number,
  road: string,
  clientsId: string,
}

class CreatePublicPlaceUseCase {

  private cep: string;
  private clientsId: string
  private neighborhood: string
  private road: string
  private numberOfHouse: number

  constructor({ cep, clientsId, neighborhood, numberOfHouse, road }: CreatePublicPlaceUseCaseProps) {
    this.cep = cep;
    this.clientsId = clientsId;
    this.neighborhood = neighborhood;
    this.numberOfHouse = numberOfHouse;
    this.road = road;
  }

  private async createPublicPlace() {
    try {
      const publicPlace = await dataBase.place.create({
        data: {
          cep: this.cep,
          neighborhood: this.neighborhood,
          numberOfHouse: this.numberOfHouse,
          road: this.road,
          clientsId: this.clientsId,
        }
      })

      return publicPlace
    } catch (error) {
      throw new Error(JSON.stringify({ Error: error }))
    }
  }

  public getCep() {
    return this.createPublicPlace();
  }
}

export { CreatePublicPlaceUseCase }

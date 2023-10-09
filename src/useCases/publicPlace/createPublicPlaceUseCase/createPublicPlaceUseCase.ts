import { dataBase } from "dataBase/dataBase"

interface CreatePublicPlaceUseCaseProps {
  cep: string,
  neighborhood: string,
  numberOfHouse: number,
  road: string,
  costumerId: string,
}

class CreatePublicPlaceUseCase {

  private cep: string;
  private costumerId: string
  private neighborhood: string
  private road: string
  private numberOfHouse: number

  constructor({ cep, costumerId, neighborhood, numberOfHouse, road }: CreatePublicPlaceUseCaseProps) {
    this.cep = cep;
    this.costumerId = costumerId;
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
          clientsId: this.costumerId,
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

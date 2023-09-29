import { dataBase } from "dataBase/dataBase";

interface UpdatedPublicPlaceUseCaseProps {
  cep: string,
  neighborhood: string,
  numberOfHouse: number,
  road: string,
  clientsId: string,
  id: number;
}

class UpdatedPublicPlaceUseCase {
  private id: number;
  private cep: string;
  private clientsId: string
  private neighborhood: string
  private road: string
  private numberOfHouse: number

  constructor({ cep, clientsId, neighborhood, numberOfHouse, road, id }: UpdatedPublicPlaceUseCaseProps) {
    this.cep = cep;
    this.clientsId = clientsId;
    this.neighborhood = neighborhood;
    this.numberOfHouse = numberOfHouse;
    this.road = road;
    this.id = id;

    this.updated();
  }

  private async updated() {
    try {

      const place = await dataBase.place.update({
        where: {
          id: this.id,
          clientsId: this.clientsId
        },
        data: {
          cep: this.cep,
          neighborhood: this.neighborhood,
          numberOfHouse: this.numberOfHouse,
          road: this.road,
        }
      })

      return place

    } catch (error) {
      throw new Error(JSON.stringify({ Error: error }))
    }
  }
}

export { UpdatedPublicPlaceUseCase }
import { Router } from "express";
import { CreatePublicPlaceController } from "useCases/publicPlace/createPublicPlaceUseCase/createPublicPlaceController";
import { GetPublicPlaceController } from "useCases/publicPlace/getPublicPlaceUseCase/getPublicPlaceController";
import { UpdatedPublicPlaceController } from "useCases/publicPlace/updatedPublicPlaceUseCase/updatedPublicPlaceController";

const publicPlaceRouter = Router();

const getPublicPlaceController = new GetPublicPlaceController();
const createPublicPlaceController = new CreatePublicPlaceController();
const updatedPublicPlaceController = new UpdatedPublicPlaceController();

publicPlaceRouter.get('/:id', getPublicPlaceController.execute)
publicPlaceRouter.post('/create', createPublicPlaceController.execute)
publicPlaceRouter.put('/updated/:id', updatedPublicPlaceController.execute)

export { publicPlaceRouter }

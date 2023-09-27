import { Router } from 'express';
import { CreatePhotosController } from 'useCases/photos/createPhotosUseCase/createPhotosController';
import { DeletePhotoController } from 'useCases/photos/deletePhotoUseCase/deletePhotoController';
import { GetPhotoController } from 'useCases/photos/getPhotosUseCase/getPhotosController';
import { UpdatedPhotoController } from 'useCases/photos/updatedPhotoUseCase/updatedPhotoController';

const photosRouter = Router();

const createPhotoController = new CreatePhotosController();
const deletePhotoController = new DeletePhotoController();
const updatedPhotoController = new UpdatedPhotoController();
const getPhotoController = new GetPhotoController();


photosRouter.get('/', getPhotoController.handleAllPhoto)
photosRouter.get('/getPhotoFromId', getPhotoController.handlePhoto)
photosRouter.post('/createPhoto', createPhotoController.handle);
photosRouter.put('/updatedPhoto', updatedPhotoController.handle)
photosRouter.delete('/deletePhoto', deletePhotoController.handle)

export { photosRouter }
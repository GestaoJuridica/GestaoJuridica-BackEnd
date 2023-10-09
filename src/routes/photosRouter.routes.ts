import { Router } from 'express';
import multer from 'multer';
import { CreatePhotosController } from 'useCases/photos/createPhotosUseCase/createPhotosController';
import { DeletePhotoController } from 'useCases/photos/deletePhotoUseCase/deletePhotoController';
import { GetPhotoController } from 'useCases/photos/getPhotosUseCase/getPhotosController';
import { UpdatedPhotoController } from 'useCases/photos/updatedPhotoUseCase/updatedPhotoController';
import { UploadPhotosController } from 'useCases/photos/uploadPhotosUseCase/uploadPhotosController';

const photosRouter = Router();

const memoryStorage = multer.memoryStorage();
const uploadImage = multer({ storage: memoryStorage })

const createPhotoController = new CreatePhotosController();
const deletePhotoController = new DeletePhotoController();
const updatedPhotoController = new UpdatedPhotoController();
const getPhotoController = new GetPhotoController();
const uploadPhotosUseCase = new UploadPhotosController();


photosRouter.get('/getAllPhotosForCostumer/:id', getPhotoController.handleAllPhoto);
photosRouter.get('/getPhotoFromId/:id', getPhotoController.handlePhoto);
photosRouter.post('/createPhoto/:id', createPhotoController.handle);
photosRouter.post('/upload/:id', uploadImage.array('image', 5), uploadPhotosUseCase.execute);
photosRouter.put('/updatedPhoto/:id', updatedPhotoController.handle);
photosRouter.delete('/deletePhoto/:id', deletePhotoController.handle);

export { photosRouter };

import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';
import ProviderAppointmentsContoller from '../controllers/ProviderAppointmentsContoller';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();
const providerAppointmentsContoller = new ProviderAppointmentsContoller();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsController.create);
appointmentsRouter.get('/me', providerAppointmentsContoller.index);

export default appointmentsRouter;

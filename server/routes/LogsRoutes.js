import express from 'express';

import { postLogs } from '../controllers/LogsController.js';

const router = express.Router();

router.post('/', postLogs);

export default router;
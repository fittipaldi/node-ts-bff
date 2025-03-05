import {Router} from 'express';
import {DemoController} from '../controllers/DemoController';

const router = Router();
const demoController = new DemoController();

// Endpoint to add demo
router.post('/demo/add', (req, res) => demoController.addDemo(req, res));

// Endpoint to get a random user
router.get('/demos', (req, res) => demoController.getDemos(req, res));

export default router;
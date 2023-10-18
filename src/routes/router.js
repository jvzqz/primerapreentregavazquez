import { Router } from "express";
import productRouter from './productRouter.js'
import cartRouter from "./cartRouter.js";

const router = Router();

router.use('/products', productRouter);
router.use('/carts', cartRouter);

router.use('/', (req, res) => {
    res.status(404).json({
      message: 'invalid api endpoint'
    })
})

export default router;
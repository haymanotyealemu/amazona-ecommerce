import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';
// import { generateToken, isAdmin, isAuth } from '../utils.js';
const productRouter = express.Router();

productRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    // await User.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
}));
productRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    // await User.remove({});
    const product = await Product.findById(req.params.id);
    res.send({product });
}));
export default productRouter;
import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import userRouter from './routers/userRouters.js';

const app = express();
mongoose.connect('mongodb://localhost/amazona', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
app.get('/', (req, res)=> {
    res.send('server is ready');
});
app.get('/api/products', (req, res) => {
    res.send(data.products);
});
app.use('/api/users', userRouter);
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if(product){
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product not Found'});
    }
});
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
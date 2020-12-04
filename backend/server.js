import express from 'express';
import data from './data.js';
const app = express();
app.get('/', (req, res)=> {
    res.send('server is ready');
});
app.get('/api/products', (req, res) => {
    res.send(data.products);
})
const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
});
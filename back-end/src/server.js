import express from 'express';
import { MongoClient } from 'mongodb';
import { cartItems as cartItemsRaw, products as productsRaw } from './temp-data';

let cartItems = cartItemsRaw;
let products = productsRaw;

const url = "mongodb://localhost:27017/"
const client = new MongoClient(url)

const app = express();
app.use(express.json());

app.get('/products', async (req, res) => {
  await client.connect();
  const db = client.db('product');
  const products = await db.collection('product').find().toArray();
  res.json(products);
});

async function populateCartIds(ids) {
    await client.connect();
  const db = client.db('product');
  return Promise.all(ids.map(id => db.collection('product').findOne({id})));
}

app.get('/user/:userId/cart', async (req, res) => {
    await client.connect();
    const db = client.db('user');
    const user = await db.collection('user').findOne({ id: req.params.userId });
    const populatedCart = await populateCartIds(user.cartItems);
    res.json(populatedCart);
});

app.get('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const product = products.find(product => product.id === productId);
  res.json(product);
});

app.post('/cart', (req, res) => {
  const productId = req.body.id;
  cartItems.push(productId);
  const populatedCart = populateCartIds(cartItems);
  res.json(populatedCart);
});

app.delete('/cart/:productId', (req, res) => {
  const productId = req.params.productId;
  cartItems = cartItems.filter(id => id !== productId);
  const populatedCart = populateCartIds(cartItems);
  res.json(populatedCart);
});

app.listen(8000, () => {
  console.log('Server is listening on port 8000')
});
import express, {Response} from 'express';
import cors from 'cors';
import {fetchDataFromMarketPlace} from './scraper';

const app = express();
const PORT = 5000;

app.use(express.json(), cors());

app.get('/', async (_, res: Response) => {
  try {
    const data = await fetchDataFromMarketPlace('https://coinmarketcap.com/');
    res.send(data);
  } catch (err) {
    throw new Error('Crap');
  }
});

app.listen(PORT);

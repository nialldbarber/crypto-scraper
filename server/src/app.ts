import express, {Request, Response} from 'express';
import {fetchDataFromMarketPlace} from './scraper';

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  try {
    const data = await fetchDataFromMarketPlace('https://coinmarketcap.com/');
    res.send(data);
  } catch (err) {
    throw new Error('Crap');
  }
});

app.listen(PORT);

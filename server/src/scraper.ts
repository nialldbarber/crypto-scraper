import puppeteer from 'puppeteer';
import cheerio from 'cheerio';

interface DataRow {
  name: string;
  symbol: string;
  image: string;
  price?: string;
  per24h: string;
  per7d: string;
  marketCap: string;
  volume: string;
  circSupply: string;
  graph?: string;
}

const row = (r: number): string => `td:nth-child(${r})`;

export async function fetchDataFromMarketPlace(
  URL: string,
): Promise<DataRow[] | void> {
  let data: DataRow[] = [];

  try {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(URL);
    const html = await page.content();
    const $ = cheerio.load(html);

    const cryptos = $('.cmc-table tbody').find('tr');

    // get headers

    // get rows
    for (let i = 0; i < 10; i++) {
      data.push({
        name: cryptos
          .eq(i)
          .find(`${row(3)} .q7nmo0-0.bogImm`)
          .text(),
        symbol: cryptos
          .eq(i)
          .find(`${row(3)} .coin-item-symbol`)
          .text(),
        image:
          cryptos
            .eq(i)
            .find(`${row(3)} img`)
            .attr('src') || '',
        price: cryptos
          .eq(i)
          .find(`${row(4)} a`)
          .text(),
        per24h: cryptos
          .eq(i)
          .find(`${row(5)} span`)
          .text(),
        per7d: cryptos
          .eq(i)
          .find(`${row(6)} span`)
          .text(),
        marketCap: cryptos
          .eq(i)
          .find(`${row(7)} p span:last-child`)
          .text(),
        volume: cryptos
          .eq(i)
          .find(`${row(8)} p`)
          .text(),
        circSupply: cryptos
          .eq(i)
          .find(`${row(9)} p`)
          .text(),
        graph:
          cryptos
            .eq(i)
            .find(`${row(10)} img`)
            .attr('src') || '',
      });
    }

    return data;
  } catch (err) {
    console.log(err);
  }
}

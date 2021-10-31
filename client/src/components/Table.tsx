import {memo} from 'react';
import {useSelector} from 'react-redux';
import {selectData} from '../store/cryptos.selectors';
import {imageStyles} from './Table.css';

function Table() {
  const data = useSelector(selectData);
  console.log(data);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>24h %</th>
          <th>7d %</th>
          <th>Market Cap</th>
          <th>Volume (24h)</th>
          <th>Circulating Supply</th>
          <th>Last 7 days</th>
        </tr>
      </thead>

      <tbody>
        {data.map(
          ({
            name,
            symbol,
            image,
            price,
            per24h,
            per7d,
            marketCap,
            volume,
            circSupply,
            graph,
          }) => (
            <tr key={symbol}>
              <td>
                <img src={image} alt={name} className={imageStyles} />
                <span>{name}</span>
                <span>{symbol}</span>
              </td>
              <td>{price}</td>
              <td>{per24h}</td>
              <td>{per7d}</td>
              <td>{marketCap}</td>
              <td>{volume}</td>
              <td>{circSupply}</td>
              <td>
                <img src={graph} alt={symbol} />
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  );
}

export default memo(Table);

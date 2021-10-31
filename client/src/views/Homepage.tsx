import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setFetchData, setLoading, setError} from '../store/cryptos.slices';
import {selectLoading, selectError} from '../store/cryptos.selectors';
import Table from '../components/Table';
import {API} from '../constants/api';

export default function Homepage() {
  let timer: number;
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(API);
        const json = await response.json();
        dispatch(setFetchData(json));
        dispatch(setLoading(false));
      } catch (err) {
        console.log(err);
        dispatch(setError(true));
        dispatch(setLoading(false));
      }
    })();

    setTimeout(() => {
      timer = setInterval(() => {
        (async function () {
          try {
            const response = await fetch(API);
            const json = await response.json();
            dispatch(setFetchData(json));
          } catch (err) {
            console.log(err);
            dispatch(setError(true));
          }
        })();
      }, 10000);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <Table />
    </div>
  );
}

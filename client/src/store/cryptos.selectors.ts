import {RootState} from './index';

export const selectData = (state: RootState) => state.cryptos.data;

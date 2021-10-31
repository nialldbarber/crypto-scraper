import {RootState} from './index';

export const selectData = (state: RootState) => state.cryptos.data;
export const selectLoading = (state: RootState) => state.cryptos.loading;
export const selectError = (state: RootState) => state.cryptos.error;

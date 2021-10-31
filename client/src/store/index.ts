import {configureStore} from '@reduxjs/toolkit';
import cryptoSlice from './cryptos.slices';

export const store = configureStore({
  reducer: {
    cryptos: cryptoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

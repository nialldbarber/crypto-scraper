import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CryptosState {
  data: any[];
  loading: boolean;
  error: boolean;
}

const initialState: CryptosState = {
  data: [],
  loading: true,
  error: false,
};

export const cryptoSlice = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {
    setFetchData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
});

export const {setFetchData, setLoading, setError} = cryptoSlice.actions;

export default cryptoSlice.reducer;

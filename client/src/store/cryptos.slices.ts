import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CryptosState {
  data: any[];
}

const initialState: CryptosState = {
  data: [],
};

export const cryptoSlice = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {
    setFetchData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {setFetchData} = cryptoSlice.actions;

export default cryptoSlice.reducer;

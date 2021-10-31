import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
  endpoints: (builder) => ({
    getCryptoByName: builder.query({
      query: (route) => route,
    }),
  }),
});

export const {useGetCryptoByNameQuery} = cryptoApi;

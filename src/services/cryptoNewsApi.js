// src/services/cryptoNewsApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'accept': 'application/json',
    'TI_API_KEY': 'a54e7d16cdf34bd699ff465c4095b8c3'
};

const baseUrl = 'https://api.tokeninsight.com/api/v1';
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ category }) => {
                // Create query parameters using URLSearchParams
                const params = new URLSearchParams({ category }).toString();
                return createRequest(`/news/list?${params}`);
            }
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

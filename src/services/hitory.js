import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const historyHeader = {
    'TI_API_KEY': 'a54e7d16cdf34bd699ff465c4095b8c3',
    'accept': 'application/json',
};

const baseUrl = 'https://api.tokeninsight.com/api/v1/history';

const createRequest = (endpoint) => ({ url: endpoint, headers: historyHeader });

export const historyApi = createApi({
    reducerPath: 'historyApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoHistory: builder.query({
            query: (coinId) => createRequest(`/coins/${coinId}`),
        }),
    }),
});

export const { useGetCryptoHistoryQuery } = historyApi;
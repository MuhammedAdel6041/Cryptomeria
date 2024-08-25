import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const coinsHeader = {
    'TI_API_KEY': 'a54e7d16cdf34bd699ff465c4095b8c3',
    'accept': 'application/json'
};

// General base URL for the API
const baseUrl = 'https://api.tokeninsight.com/api/v1/coins';

// Function to create a request with the dynamic endpoint
const createRequest = (endpoint) => ({ url: endpoint, headers: coinsHeader });

export const coinsApi = createApi({
    reducerPath: 'coinsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCoins: builder.query({
            query: (count) => createRequest(`/list?limit=${count}`),  // Example for getting a list of coins
        }),
        getNewlyListedCoins: builder.query({
            query: () => createRequest('/list/newly-listed'),  // Endpoint for newly listed coins
        }),
        getTopGainers: builder.query({
            query: () => createRequest('/top-gainers'),  // Endpoint for top gainers
        }),
        getTopLosers: builder.query({
            query: () => createRequest('/top-losers'),  // Endpoint for top losers
        }),
        getCryptoDetails: builder.query({
            query: (id) => createRequest(`/${id}`),  // Endpoint for top losers
        }),
        getCryptoTeamDetails: builder.query({
            query: (id) => createRequest(`/${id}/teams`),  // Endpoint for top losers
        }),


    })
});

// Export hooks for the endpoints
export const {
    useGetCoinsQuery,
    useGetNewlyListedCoinsQuery,
    useGetTopGainersQuery,
    useGetTopLosersQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoTeamDetailsQuery

} = coinsApi;

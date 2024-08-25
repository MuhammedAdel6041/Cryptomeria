import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const exchangesHeaders = {
    'TI_API_KEY': 'a54e7d16cdf34bd699ff465c4095b8c3',
    'accept': 'application/json'
}

const baseUrl = 'https://api.tokeninsight.com/api/v1/exchanges';
const createRequest = (endpoint) => ({ url: endpoint, headers: exchangesHeaders })

export const exchangeApi = createApi({
    reducerPath: 'exchangeApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getExchange: builder.query({
            query: (count) => createRequest(`/list?limit=${count}`)
        }),
        getExchangesDetailes: builder.query({
            query: (id) => createRequest(`/${id}`)
        })
    })
})



export const {
    useGetExchangeQuery,
    useGetExchangesDetailesQuery
} = exchangeApi
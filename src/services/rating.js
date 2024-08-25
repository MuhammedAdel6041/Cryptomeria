import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rateHeader = {
    'TI_API_KEY': 'a54e7d16cdf34bd699ff465c4095b8c3',
    'accept': 'application/json'
}

const baseUrl = 'https://api.tokeninsight.com/api/v1';
const createRequest = (endpoint) => ({ url: endpoint, headers: rateHeader })



export const rateApi = createApi({
    reducerPath: 'rateApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getRate: builder.query({
            query: (count) => createRequest(`/rating/coins?limit=${count}`)
        }),
        getDetailsRating: builder.query({
            query: (id) => createRequest(`/rating/coin/${id}`)
        })
    })
})


export const {
    useGetRateQuery,
    useGetDetailsRatingQuery
} = rateApi
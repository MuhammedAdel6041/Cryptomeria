import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const globalHeader = {
    'TI_API_KEY': 'a54e7d16cdf34bd699ff465c4095b8c3',
    'accept': 'application/json'
}
const baseUrl = 'https://api.tokeninsight.com/api/v1';
const createRequest = (endpoint) => ({ url: endpoint, headers: globalHeader })

export const globalApi = createApi({
    reducerPath: 'globalApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getGlobal: builder.query({
            query: () => createRequest('/global')
        }),
        getResearch: builder.query({
            query: () => createRequest('/research/list')
        })
    })
})
export const {
    useGetGlobalQuery,
    useGetResearchQuery
} = globalApi
import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BaseQuery = fetchBaseQuery({
    baseUrl: '',
})

export  const apiSlice = createApi({
    BaseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({}),
})
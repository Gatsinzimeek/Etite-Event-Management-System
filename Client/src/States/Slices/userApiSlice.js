import { apiSlice } from "./ApiSlice";

const baseUrl = '/api/Auth';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${baseUrl}/login`,
                method: 'POST',
                body: data,
            })
        }),
        // RegisterUser: builder.mutation({
        //     query: (data) => ({
        //         url: `${baseUrl}/signup`
        //     })
        // })
    }),
})

export const {useLoginMutation} = userApiSlice;
import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  endpoints: build => ({
    getAllContacts: build.query({
      query: () => ({ url: 'contacts', method: 'get' }),
      providesTags: ['Contact'],
    }),
    addContact: build.mutation({
      queryFn: async ({ name, number }) => {
        const { data, error } = await axios.post('/contacts', { name, number });
        if (error) return { error };
        return data;
      },
      invalidatesTags: ['Contact'],
    }),
    deleteContact: build.mutation({
      query(id) {
        return {
          url: `contacts/${id}`,
          method: 'delete',
        };
      },
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

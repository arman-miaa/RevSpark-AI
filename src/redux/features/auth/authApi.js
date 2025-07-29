// src/redux/features/auth/authApi.js
import { baseApi } from "../../api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    socialLogin: builder.mutation({
      query: (provider) => ({
        url: `/auth/${provider}`,
        method: "GET",
      }),
    }),
    getLoggedUser: builder.query({
      query: () => "/user/me", // ✅ যদি তুমি "me" route ইউজ করো
      providesTags: ["User"],
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useSocialLoginMutation,
  useGetLoggedUserQuery,
  useLogoutMutation,
} = authApi;

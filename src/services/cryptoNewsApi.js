import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const REACT_APP_RAPIDAPI_KEY = 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85';
const REACT_APP_NEWS_RAPIDAPI_HOST = 'bing-news-search1.p.rapidapi.com';
const REACT_APP_NEWS_API_URL = 'https://bing-news-search1.p.rapidapi.com';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-key': REACT_APP_RAPIDAPI_KEY,
  'x-rapidapi-host': REACT_APP_NEWS_RAPIDAPI_HOST,
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { coinsApi } from "../services/coinsApi";
import { historyApi } from "../services/hitory";
import { globalApi } from "../services/globalStatus";
import { rateApi } from "../services/rating";
import { exchangeApi } from "../services/Exchanges";


export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [coinsApi.reducerPath]: coinsApi.reducer,
    [historyApi.reducerPath]: historyApi.reducer,
    [globalApi.reducerPath]: globalApi.reducer,
    [rateApi.reducerPath]: rateApi.reducer,
    [exchangeApi.reducerPath]: exchangeApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware, cryptoNewsApi.middleware, coinsApi.middleware, historyApi.middleware, globalApi.middleware, rateApi.middleware, exchangeApi.middleware),
});

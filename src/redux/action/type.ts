
import { store } from '../store';

export const WEATHER_FETCH = "WEATHER_FETCH";
export const WEATHER_FETCH_ERROR = "WEATHER_FETCH_ERROR";

export const FORECASTLATLONG_FETCH = "FORECASTLATLONG_FETCH";
export const FORECASTLATLONG_FETCH_ERROR = "FORECASTLATLONG_FETCH_ERROR";

export const FORECAST_FETCH = "FORECAST_FETCH";
export const FORECAST_FETCH_ERROR = "FORECAST_FETCH_ERROR";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

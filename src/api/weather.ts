import axios, { AxiosRequestConfig } from 'axios';
import { Api_Key, Forecast_URL, Search_URL } from '../constants';

interface Params {
  cityName?: string;
  days?: number;
  latitude?: number;
  longitude?: number;
}

export const forecastEndpoint = (params: Params): string =>
  `${Forecast_URL}${Api_Key}&q=${params.cityName}&days=7&aqi=yes&alerts=yes`;

export const locationsEndpoint = (params: Params): string =>
  `${Search_URL}${Api_Key}&q=${params.cityName}`;

export const forecastLatLongpoint = (params: Params): string =>
  `${Forecast_URL}${Api_Key}&q=${params.latitude},${params.longitude}&days=7&aqi=yes&alerts=yes`;

export const apiCall = async <T>(endpoint: string): Promise<T> => {
  console.log(endpoint);
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: endpoint,
  };

  try {
    const response = await axios.request<T>(options);
    return response.data;
  } catch (error) {
    console.log('error: ', error);
    return {} as T;
  }
};



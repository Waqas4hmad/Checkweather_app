
import axios from 'axios';
import { Dispatch } from 'redux';
import { Api_Key, Forecast_URL, Search_URL } from '../../constants';
import { FORECASTLATLONG_FETCH, FORECASTLATLONG_FETCH_ERROR, FORECAST_FETCH, FORECAST_FETCH_ERROR, WEATHER_FETCH_ERROR } from './type';

interface Params {
    cityName?: string;
    days?: number;
    latitude?: number;
    longitude?: number;
}
export const fetchLocations = (params: Params) =>
    async (dispatch: Dispatch) => {
        try {
            const response = await axios.get(`${Search_URL}${Api_Key}&q=${params.cityName}`);
            const location = response?.data;
            if (location) {
                dispatch({
                    type: FORECASTLATLONG_FETCH,
                    payload: location,
                });
                return location;
            }
            else {
                dispatch({ type: WEATHER_FETCH_ERROR, payload: "Error " });
                return false;
            }
        } catch (error) {
            dispatch({ type: WEATHER_FETCH_ERROR, payload: "Error" });
            return false;
        }
    }
export const weatherdata = (params: Params) => {

    return async (dispatch: Dispatch) => {
        try {
            const weatherdata = await axios.get(`${Forecast_URL}${Api_Key}&q=${params.latitude},${params.longitude}&days=7&aqi=yes&alerts=yes`);
            const weather = weatherdata.data;
            if (weather) {
                dispatch({
                    type: FORECASTLATLONG_FETCH,
                    payload: weather,
                });
                return weather;
            }
            else {
                dispatch({
                    type: FORECASTLATLONG_FETCH_ERROR,
                    payload: "Empty Error"
                });
                return "Error";
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: FORECASTLATLONG_FETCH_ERROR,
                payload: "error.message"
            });
            return "Error";
        }

    }
}


export const fetchWeatherForecast = (params: Params) =>
    async (dispatch: any) => {
        try {
            const Forecastresponse = await axios.get(`${Forecast_URL}${Api_Key}&q=${params.cityName}&days=7&aqi=yes&alerts=yes`);
            const response = Forecastresponse.data;

            if (response) {
                dispatch({
                    type: FORECAST_FETCH,
                    payload: response,
                });
                return response;
            }
            else {
                dispatch({ type: FORECAST_FETCH_ERROR, payload: "Error " });
                return "Error";
            }
        } catch (error) {
            dispatch({ type: FORECASTLATLONG_FETCH_ERROR, payload: "Error" });
            return "Error";
        }
    }






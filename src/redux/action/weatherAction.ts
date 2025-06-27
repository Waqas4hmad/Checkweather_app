
import axios from 'axios';
import { Dispatch } from 'redux';
import { apiCall, forecastEndpoint, forecastLatLongpoint } from '../../api/weather';
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
            const cardata = await axios.get(`${Forecast_URL}${Api_Key}&q=${params.latitude},${params.longitude}&days=7&aqi=yes&alerts=yes`);
            const weather = cardata.data;
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
                    payload: "INVALID_LOGIN"
                });
                return false;
            }
        } catch (error) {
            console.log(error);
            dispatch({
                type: FORECASTLATLONG_FETCH_ERROR,
                payload: "error.message"
            });
            return false;
        }

    }
}
export const fetchWeatherByLatLong = (params: Params) =>
    async (dispatch: Dispatch) => {

        try {
            console.log("dd")
            let forecastUrl = forecastLatLongpoint(params);
            const response = apiCall<any>(forecastUrl);
            if (response) {
                dispatch({ type: FORECASTLATLONG_FETCH, payload: response });
                return true;
            }
            else {
                dispatch({ type: FORECASTLATLONG_FETCH_ERROR, payload: "Error " });
                return false;
            }
        } catch (error) {
            dispatch({ type: FORECASTLATLONG_FETCH_ERROR, payload: "Error" });
            return false;
        }
    }

export const fetchWeatherForecast = (params: Params) =>
    async (dispatch: any) => {
        try {
            let forecastUrl = forecastEndpoint(params);
            const response = apiCall<any>(forecastUrl);
            if (response) {
                dispatch({ type: FORECAST_FETCH, payload: response });
                return true;
            }
            else {
                dispatch({ type: FORECAST_FETCH_ERROR, payload: "Error " });
                return false;
            }
        } catch (error) {
            dispatch({ type: FORECASTLATLONG_FETCH_ERROR, payload: "Error" });
            return false;
        }
    }






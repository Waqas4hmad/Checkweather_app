import { FORECASTLATLONG_FETCH, FORECASTLATLONG_FETCH_ERROR, FORECAST_FETCH, FORECAST_FETCH_ERROR, WEATHER_FETCH, WEATHER_FETCH_ERROR } from '../action/type';

const initialState = {
    user: null,
    error: null
}

const weatherReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case WEATHER_FETCH:
            return {
                ...state,
                user: action.payload,
                error: null,
            };
        case WEATHER_FETCH_ERROR:
            return {
                ...state,
                user: null,
                error: action.payload
            }
        case FORECASTLATLONG_FETCH:
            return {
                ...state,
                user: action.payload,
                error: null
            }
        case FORECASTLATLONG_FETCH_ERROR:
            return {
                ...state,
                user: null,
                error: action.payload
            }
        case FORECAST_FETCH:
            return {
                ...state,
                user: action.payload,
                error: null
            }
        case FORECAST_FETCH_ERROR:
            return {
                ...state,
                user: null,
                error: action.payload
            }
        default:
            return state;
    }
}

export default weatherReducer;
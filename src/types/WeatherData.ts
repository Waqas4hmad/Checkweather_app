export type Location = {
  name: string;
  country: string;
};

export type ForecastDay = {
  date: string;
  date_epoch: number;
  day?: {
    condition?: String;
    avgtemp_c: number;
  };
};

export type Forecast = {
  forecastday?: ForecastDay[];
};

export type WeatherData = {
  current?: String;
  forecast?: Forecast;
  location?: Location;
};
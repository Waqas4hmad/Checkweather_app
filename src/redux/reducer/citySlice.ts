import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CityState {
  lastSearchedCity: string;
}

const initialState: CityState = {
  lastSearchedCity: '',
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.lastSearchedCity = action.payload;
    },
  },
});

export const { setCity } = citySlice.actions;
export default citySlice.reducer;
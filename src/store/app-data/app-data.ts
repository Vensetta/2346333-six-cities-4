import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CITIES, NameSpace, SortType} from '../../const';
import { City } from '../../types/location';

export type AppDataState = {
  selectedCity: City;
  selectedSortType: SortType;
};

const initialState: AppDataState = {
  selectedCity: CITIES.Paris,
  selectedSortType: SortType.Popular,
};

export const appData = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<City>) => {
      state.selectedCity = action.payload;
    },
    changeSortingType: (state, action: PayloadAction<SortType>) => {
      state.selectedSortType = action.payload;
    },
  },
});

export const { changeCity, changeSortingType } = appData.actions;

// counterSlice.js
import {createSlice} from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    homeList: [],
    homeDetail: {},
  },
  reducers: {
    setHomeList: (state, payload) => {
      state.homeList = payload?.payload;
    },
    setHomeDetail: (state, payload) => {
      state.homeDetail = payload?.payload;
    },
  },
});

export const {setHomeList, setHomeDetail} = homeSlice.actions;

export const homeListData = state => state.home;
export const homeDetails = state => state.home;

export default homeSlice.reducer;

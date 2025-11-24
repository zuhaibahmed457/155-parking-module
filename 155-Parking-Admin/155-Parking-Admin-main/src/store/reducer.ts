import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  isLogged: boolean;
  drawerOpen: boolean;
  mobileDrawerOpen: boolean;
  user: null;
  isLoading: boolean;
}

const initialState: AppState = {
  isLogged: true,
  drawerOpen: true,
  mobileDrawerOpen: false,
  user: null,
  isLoading: false,
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    toggleDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
    setDrawerOpen: (state, action) => {
      state.drawerOpen = action.payload;
    },
    toggleMobileDrawer: (state) => {
      state.mobileDrawerOpen = !state.mobileDrawerOpen;
    },
    setMobileDrawer(state, action) {
      state.mobileDrawerOpen = action.payload;
    },
    login(state, action) {
      // if (action.payload?.role === "customer") {
      //   state.isLogged = true;
      // } else if (
      //   action.payload?.role === "anonymous" &&
      //   action.payload?.wallet
      // ) {
      //   state.isLogged = true;
      // }
      state.user = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    logout(state) {
      state.isLogged = false;
      state.user = null;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  login,
  logout,
  setUser,
  setIsLoading,
  toggleMobileDrawer,
  setDrawerOpen,
  setIsLogged,
  setMobileDrawer,
} = appSlice.actions;

export default appSlice.reducer;

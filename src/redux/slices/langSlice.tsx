import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type LangState = {
  currentLang: string;
};

const initialState: LangState = {
  currentLang: "es",
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.currentLang = action.payload;
    },
  },
});

export const { setLanguage } = langSlice.actions;
export default langSlice.reducer;

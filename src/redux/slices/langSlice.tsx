import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LanguageState } from "../../types/languages";
import zh from "../../i18n/zh";

type LangState = {
  currentLang: LanguageState;
  code: "zh";
};

const translations = { zh };
const defaultLanguage = "zh";

const initialState: LangState = {
  currentLang: translations[defaultLanguage],
  code: defaultLanguage,
};

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<"zh">) => {
      const lang = action.payload;
      state.currentLang = translations[lang];
      state.code = lang;
    },
  },
});

export const { setLanguage } = langSlice.actions;
export default langSlice.reducer;

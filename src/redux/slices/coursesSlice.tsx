import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Course } from "../../types/types";

const initialState: Course[] = [];

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    getCourses: (state: Course[], action: PayloadAction<Course[]>) => {
      console.log(state, action);
    },
    setCourses: (state: Course[], action: PayloadAction<Course[]>) => {
      return action.payload;
    },
  },
});

export const { getCourses, setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;

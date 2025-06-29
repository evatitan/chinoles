import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Course } from "../../types/types";
import { get } from "react-hook-form";

const initialState: Course[] = [];

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    getCourses: (state: Course[], action: PayloadAction<Course[]>) => {
      console.log(state, action);
    },
  },
});

export const { getCourses } = coursesSlice.actions;
export default coursesSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let init = {
  fetchCourses: {
    data: null,
    error: null,
    status: "idle",
  },
  searchCourse: {
    data: null,
    error: null,
    status: "idle",
  },
};

export const fetchData = createAsyncThunk("Courses/fetchData", async () => {
  let res = await axios.get("http://localhost:4000/courses");
  return res.data.courses;
});

export const searchCourse = createAsyncThunk(
  "Courses/searchCourse",
  async (id) => {
    let res = await axios.get(
      `http://localhost:4000/Courses/searchCourse/${id}`
    );

    return res.data.course;
  }
);

let Courses = createSlice({
  name: "Courses",
  initialState: init,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        (state.fetchCourses.data = action.payload),
          (state.fetchCourses.status = "idle");
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.fetchCourses.error = action.error.message;
        state.fetchCourses.status = "idle";
      })
      .addCase(fetchData.pending, (state) => {
        state.fetchCourses.status = "loading";
      })
      .addCase(searchCourse.fulfilled, (state, action) => {
        state.searchCourse.data = action.payload;
        state.searchCourse.status = "idle";
      })
      .addCase(searchCourse.rejected, (state, action) => {
        state.searchCourse.error = action.error.message;
        state.searchCourse.status = "idle";
      })
      .addCase(searchCourse.pending, (state) => {
        state.searchCourse.status = "loading";
      }),
});

export default Courses.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const init = {
  data: null,
  status: "idle",
  error: null,
};

export const fetchOwnedCourses = createAsyncThunk(
  "coursesOwned/fetchOwnedCourses",
  async (userId) => {
    let res = await axios.get(
      `http://localhost:4000/user/getOwendCourses/${userId}`
    );

    return res.data.data;
  }
);

const coursesOwned = createSlice({
  name: "couesesOwned",
  initialState: init,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchOwnedCourses.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(fetchOwnedCourses.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "idle";
      })
      .addCase(fetchOwnedCourses.pending, (state) => {
        state.status = "loading";
      }),
});

export default coursesOwned.reducer;

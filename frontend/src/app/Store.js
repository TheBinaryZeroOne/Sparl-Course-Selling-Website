import { configureStore } from "@reduxjs/toolkit";
import Courses from "../features/CoursesSlice";
import User from "../features/UserSlice";
import CoursesOwned from "../features/CoursesOwned";

const store = configureStore({
  reducer: {
    Courses,
    User,
    CoursesOwned,
  },
});

export default store;

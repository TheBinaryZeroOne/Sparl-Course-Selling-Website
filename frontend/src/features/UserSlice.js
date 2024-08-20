import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

const init = {
  userID: "",
  username: "",
  email: "",
  role: "",
};

let user = createSlice({
  name: "user",
  initialState: init,
  reducers: {
    addUserDetails: (state, action) => {
      const { token } = action.payload;
      if (token) {
        const decodedToken = jwtDecode(token);
        const { username, email, role, userID } = decodedToken;

        (state.email = email),
          (state.role = role),
          (state.username = username),
          (state.userID = userID);
      }
    },
    logoutUser: (state) => {
      state.email = "";
      state.role = "";
      state.username = "";
      state.userID = "";
    },
  },
});

export const { addUserDetails, logoutUser } = user.actions;
export default user.reducer;

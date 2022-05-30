import { createSlice } from "@reduxjs/toolkit";



//demo slice for registration

const initialState = {
  loading: false,
  register: {
    firstName: "",
     lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
   
  },
  error: "",
};

const slice = createSlice({
  name: "registation",
  initialState,
  reducers: {
    loadingRegistration: (state, action) => {
      state.loading = action.payload;
    },
    setRegistration: (state, action) => {
      state.register = action.payload;
    },
    registationError: (state, action) => {
      state.loading = true;
      state.error = action.payload;
    },
  },
});

export default slice.reducer;
export const { loadingRegistration, setRegistration, registationError } =
  slice.actions;

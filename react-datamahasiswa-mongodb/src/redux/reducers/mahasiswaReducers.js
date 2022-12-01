import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mahasiswas: [],
};

const mahasiswaSlicer = createSlice({
  name: "mahasiswa",
  initialState,
  reducers: {
    getAllMahasiswaReducer: (state, action) => {
      state.mahasiswas = action.payload;
    },
  },
});

export const { getAllMahasiswaReducer } = mahasiswaSlicer.actions;
export default mahasiswaSlicer.reducer;

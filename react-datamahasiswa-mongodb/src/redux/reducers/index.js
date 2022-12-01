import { combineReducers } from "@reduxjs/toolkit";
import mahasiswaReducers from "./mahasiswaReducers";

export default combineReducers({
  mahasiswa: mahasiswaReducers,
});

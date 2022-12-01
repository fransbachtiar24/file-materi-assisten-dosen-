import axios from "axios";
import { getAllMahasiswaReducer } from "../reducers/mahasiswaReducers";

export const getAllMahasiswa = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_MHS_API}/mahasiswa`
    );
    // dispatch to reducers
    dispatch(getAllMahasiswaReducer(data));
  } catch (error) {
    throw error;
  }
};

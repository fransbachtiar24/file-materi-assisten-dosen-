import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMahasiswa } from "../redux/actions/mahasiswaActions";

function Home() {
  const dispatch = useDispatch();
  const mahasiswa = useSelector((state) => state.mahasiswa.mahasiswas);

  console.log(mahasiswa);
  useEffect(() => {
    dispatch(getAllMahasiswa());
  }, [dispatch]);

  return (
    <>
      <div>
        {mahasiswa &&
          mahasiswa.map((item, index) => {
            return (
              <>
                <div className="container">
                  <div className="row" key={index}>
                    <div className="col-lg-6">
                      <h1>{item.nama}</h1>
                    </div>
                    <div className="col-lg-6">
                      <h1>{item.alamat}</h1>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}

export default Home;

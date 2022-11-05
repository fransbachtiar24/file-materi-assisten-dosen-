// console.log("Selamat pagi")

// // variabel
// let npm = 2125250025
// let nama = "Deo Hartanto"
// // array
// let arrayMahasiswa = ["Jendraja", "Dep Niel"]
// let arrayDosen = Array("Ahmad", "Ali")
// // object
// let mahasiswa = { npm: 2125250025, nama: "Deo", hobi: ["ngoding", "gaming", "reading"] }

// console.log(arrayMahasiswa[0])
// console.log(arrayDosen[1])
// console.log(mahasiswa.nama) // output Deo
// console.log(mahasiswa.hobi[0]) // output ngoding

let txtNpm = document.getElementById("npm");
let txtNama = document.getElementById("nama");
let listMhs = document.getElementById("listMahasiswa");
let tblMhs = document.getElementById("tblMahasiswa");
let data = [];
// panggil function tampil()
tampil();

function simpan() {
  console.log("Button simpan ditekan");

  console.log(txtNpm.value);
  console.log(txtNama.value);

  // cek apakah ada data di dalam localStorage dengan key lsMahasiswa
  if (localStorage.getItem("lsMahasiswa") === null) {
    // jika localStorage dengan key lsMahasiswa belum ada

    // simpan object ke array data
    data.push({ npm: txtNpm.value, nama: txtNama.value });

    // clear

    // simpan localStorage dengan key lsMahasiswa
    localStorage.setItem("lsMahasiswa", JSON.stringify(data));
  } else {
    // jika localStorage dengan key lsMahasiswa sudah ada/sudah disimpan sebelumnya

    // ambil dulu data di localStorage dengan key lsMahasiswa
    let dataLs = JSON.parse(localStorage.getItem("lsMahasiswa"));
    console.log(dataLs);
    // push data baru ke dalam array
    dataLs.push({ npm: txtNpm.value, nama: txtNama.value });
    // simpan data baru ke dalam localStorage
    localStorage.setItem("lsMahasiswa", JSON.stringify(dataLs));
  }

  // panggil function tampil()
  tampil();
}

function tampil() {
  // gunakan forEach
  data.forEach(listData);

  // clear elemen tbls mahasiswa
  tblMhs.innerHTML = "";
  listMhs.innerHTML = "";
  // ambil data localStorage dengan key lsMahasiswa
  let dataTampil = JSON.parse(localStorage.getItem("lsMahasiswa"));
  dataTampil.forEach(listData);
}

function handleDelete() {
  tblMhs.innerHTML = "";
  localStorage.removeItem("lsMahasiswa");
  alert("data terhapus");
}

function listData(item, index) {
  // innerHTML elemen ul id="listMahasiswa" pada index.html
  let i = 0;
  listMhs.innerHTML +=
    "<li class='list-group-item'>" + item.npm + "-" + item.nama + "</li>";
  // innerHTML elemen table id="tblMahasiswa" pada index.html
  tblMhs.innerHTML += `<tr><td>${item.npm}</td><td>${item.nama}</td> <td>
  <button type="button" class="btn btn-warning" onclick="handleEdit(${i})">Edit</button>
  <button type="button" class="btn btn-danger" onclick="handleDelete()">Delete</button>
  </td><tr>`;

  i++;
}

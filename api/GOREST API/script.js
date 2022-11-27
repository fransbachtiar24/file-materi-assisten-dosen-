let listUser = document.getElementById("listUser");
let email = document.getElementById("email");
let name = document.getElementById("name");
let gender = document.getElementById("gender");
let status = document.getElementById("status");
let alert = document.getElementById("alert");
let btnUpdate = document.getElementById("btn-Submit");
getUser();

function getUser() {
  fetch("https://gorest.co.in/public/v2/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach(showUser);
    })
    .catch((error) => {
      console.log(error);
    });
}

const Submit = (statusSimpan = 0) => {
  if (statusSimpan == 0) {
    fetch("https://gorest.co.in/public/v2/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 4f132e6355c55833d01e0dbebc067e6479b208bb743cb35b16baeee044c6358d",
      },
      body: JSON.stringify({
        email: email.value,
        name: name.value,
        gender: gender.value,
        status: status.value,
      }),
    }).then((response) => {
      console.log(response);
      if (response.status == 201) {
        alert.innerHTML = ` <div class="alert alert-success">Data Berhasil Disimpan</div>`;
        return;
      }
      if (response.status == 422) {
        alert.innerHTML = ` <div class="alert alert-danger">Data Tidak Berhasil Disimpan</div>`;
        return;
      }
    });
  } else {
    // ubah data
    fetch("https://gorest.co.in/public/v2/users" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 4f132e6355c55833d01e0dbebc067e6479b208bb743cb35b16baeee044c6358d",
      },
      body: JSON.stringify({
        email: email.value,
        name: name.value,
        gender: gender.value,
        status: status.value,
      }),
    }).then((response) => {
      console.log(response);
      if (response.status == 200) {
        alert.innerHTML = ` <div class="alert alert-success">Data Berhasil DiUbah</div>`;
        return;
      }
      if (response.status == 422) {
        alert.innerHTML = ` <div class="alert alert-danger">Data Tidak Berhasil DiUbah</div>`;
        return;
      }
    });
  }
};

const editUser = (id) => {
  fetch("https://gorest.co.in/public/v2/users/" + id)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      email.value = data.email;
      name.value = data.name;
      gender.value = data.gender;
      status.value = data.status;

      // ubah teks menjadi simpan
      btnUpdate.innerHTML = "Ubah";
      // ubah onclik dengan menambahkan "1"
      // onclik(Submit(1))

      btnUpdate.setAttribute("onclick", "Submit(1, " + id + ")");
    });
};

function showUser(value, index) {
  listUser.innerHTML += `<tr>
    <td>${value.email}</td>
    <td>${value.name}</td>
    <td>${value.gender}</td>
    <td>${value.status}</td>
    <td><button class="btn btn-info" onclick="editUser(${value.id})">Edit</button>
    <button class="btn btn-danger" onclick="deleteUser(${value.id})">Delete</button></td>
    </tr>`;
}

function deleteUser(id) {
  console.log("Hapus data id: " + id);
  fetch("https://gorest.co.in/public/v2/users/" + id, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer 4f132e6355c55833d01e0dbebc067e6479b208bb743cb35b16baeee044c6358d",
    },
  })
    .then((response) => {
      console.log(response);
      listUser.innerHTML = ""; // kosongkan tabel list user
      getUser(); // panggil function getUser()
    })
    .catch((error) => {
      console.log(error);
    });
}

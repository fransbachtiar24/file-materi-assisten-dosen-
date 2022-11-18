let userList = document.getElementById("listUser");

fetch("https://gorest.co.in/public/v2/users").then(function (response) {
  if (response.status != 200) {
    console.log("Oopss Server Tidak Bisa Di Akses");
    return;
  }
  response.json().then(function (data) {
    console.log(data);
    data.forEach(getAllUser);
  });
});

// handle delete
const handleDelete = (id) => {
  console.log("hapus data id" + id);
  fetch("https://gorest.co.in/public/v2/users" + id, {
    method: "DELETE",
    headers: {
      Autorization:
        "Bearer 4f132e6355c55833d01e0dbebc067e6479b208bb743cb35b16baeee044c6358d",
    },
  }).then((response) => {
    console.log(response);
    userList.innerHTML = "";
    getAllUser();
  });
};

const getAllUser = (item, index) => {
  userList.innerHTML += `
    <tr>
    <td>${item.email}</td>
    <td>${item.name}</td>
    <td>${item.gender}</td>
    <td>${item.status}</td>
    <td>
    <button class="btn btn-warning mx-2">Edit</>
    <button class="btn btn-danger mx-2" onClik="deleteuser(${item.id})">Delete</>
    </td>
    </tr>`;
};

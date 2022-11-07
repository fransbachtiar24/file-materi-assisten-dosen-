// local storage yekan wkwk:v
let NamaText = document.getElementById("nama");
let EmailText = document.getElementById("email");
let TextArea = document.getElementById("area");
let card = document.getElementById("Beruang");
let data = [];

const Simpan = () => {
  console.log(NamaText.value);
  console.log(EmailText.value);
  console.log(TextArea.value);
  if (localStorage.getItem("form") === null) {
    data.push({
      nama: NamaText.value,
      email: EmailText.value,
      area: TextArea.value,
    });
    localStorage.setItem("form", JSON.stringify(data));
  } else {
    let dataLs = JSON.parse(localStorage.getItem("form"));
    console.log(dataLs);
    dataLs.push({
      nama: NamaText.value,
      email: EmailText.value,
      area: TextArea.value,
    });
    localStorage.setItem("form", JSON.stringify(dataLs));
  }
  tampil();
};

const tampil = () => {
  data.forEach(listData);
  card.innerHTML = "";
  let dataTampil = JSON.parse(localStorage.getItem("form"));
  dataTampil.forEach(listData);
};

const listData = (item) => {
  card.innerHTML += `
    <div class = "col-8 col-lg-6" >
      <div class = "card mb-2" style = "width: 35rem;" >
        <div class = "card-body" >
          <h5 class = "card-title" >${item.nama}</h5> 
          <h6 class = "card-subtitle mb-2 text-muted">${item.email}</h6>
          <p class = "card-text" >${item.area}</p> 
        </div> 
      </div> 
    </div>
    `;
};
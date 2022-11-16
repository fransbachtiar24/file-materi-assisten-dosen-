let standing = document.getElementById("klasmen");

fetch("http://127.0.0.1:5500/public/standings.json")
  .then(function (response) {
    if (response.status != 200) {
      console.log("Ooppss Server Tidak Bisa Diakses");
      return;
    }
    response.json().then(function (data) {
      console.log(data)
      console.log(data.standings);
      data.standings[0].table.forEach(getAll);
    });
  })
  .then(function (err) {
    console.log(err);
  });

const getAll = (item) => {
  standing.innerHTML += `<tr>
  <td>${item.position}</td>
  <td><img src='${item.team.crest}' width='30px' class='mx-3' alt='salah'/>${item.team.name}</td>
  <td class="text-center">${item.form}</td>
  <td class="text-center">${item.playedGames}</td>
  <td class="text-center">${item.won}</td>
  <td class="text-center">${item.draw}</td>
  <td class="text-center">${item.lost}</td>
  <td class="text-center">${item.points}</td>
  </tr>`;
};
document.querySelector("#klik").addEventListener("click", tampil);

function tampil() {

  let url = "js/tblmenu.json";

  fetch(url)

      // menggunakan arrow function
      // .then(res => res.json())
      // .then(data => console.log(data))

      //menggunakan function biasa
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        let output = "<h1>Data menu</h1> <table border> <th>menu</th> <th>harga</th> <th>warna</th>";
        data.forEach(element => {
          output += `<tr>
            <td>${element.menu}</td>
            <td>${element.harga}</td>
            <td>${element.warna[0]}</td>
          </tr>`
        });

        output += "</table>";

        document.querySelector("#isi").innerHTML= output;
      })
}



// let tblmenu = [
//   {
//   "idmenu" : 1,
//   "idkategori": 1,
//   "menu": "apel manalagi",
//   "harga": 3000,
//   "warna" : ["merah", "kuning", "hijau"],
//   "stop": true,
//   "keterangan" : null
// },

// {
//   "idmenu" : 2,
//   "idkategori": 1,
//   "menu" : "Pisang",
//   "harga" : 3000,
//   "warna" : ["merah", "kuning"],
//   "stop" : false,
//   "keterangan" : null
// }

// ]

// console.log(tblmenu[0].menu);
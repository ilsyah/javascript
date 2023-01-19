let tblmenu = [
  { idmenu: 1, idkategori: 1, menu: 'apel manalagi', gambar: 'apel.jpg', harga: 3000 },
  { idmenu: 2, idkategori: 1, menu: 'pisang raja', gambar: 'pisang.jpg', harga: 5000 },
  { idmenu: 3, idkategori: 2, menu: 'nasi bakar', gambar: 'nasibakar.jpg', harga: 20000 },
  { idmenu: 4, idkategori: 2, menu: 'nasipadang', gambar: 'nasipadang.jpg', harga: 15000 },
  { idmenu: 5, idkategori: 3, menu: 'es teh', gambar: 'esteh.jpg', harga: 7000 },
];

let tampil = tblmenu.map(function (kolom) {
  return `<div class="produk-content">
  <div class="image">
    <img src="images/${kolom.gambar}" alt="HandPhone" />
  </div>
  <div class="title">
    <h2> ${kolom.menu} </h2>
  </div>
  <div class="harga">
    <h2>Rp. ${kolom.harga}</h2>
  </div>
</div>`;
});

let isi = document.querySelector('.produk');
isi.innerHTML = tampil;

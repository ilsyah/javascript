let fungsi = function (nama) {
  console.log('belajar function' + nama);
};

fungsi(' joni');

let contoh = (nama) => {
  console.log('belajar function ' + nama);
};

contoh('budi');

let tambah = function (a, b) {
  return a + b;
};
console.log(tambah(2, 3));

let plus = (a, b) => a + b;

console.log(plus(2, 3));

let hasil = (a) => a * 2;
console.log(hasil(4));

let lagi = () => console.log('cobalagi');
lagi();

let belajar = () => {
  console.log('baris 1');
  console.log('baris 2');
  console.log('baris 3');
  console.log('baris 4');
};

belajar();

let nilai = 3;

let uji = nilai < 7 ? () => (predikat = 'gagal') : () => (predikat = 'lulus');
console.log(uji());

let x = 2;

x = -x;

console.log(x);

let p = 5,
  l = 6,
  t = 7,
  volume;

// p = 5;
// l = 6;
// t = 7;

volume = p * l * t;

console.log(volume);

console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(3 / 2);
console.log(7 % 5); //hasil dari sisa pembagian (bukan pecahan)

let kota = 'sido' + 'arjo';
console.log(kota);

console.log('1' + 5 + 6); //jika depan adalah string maka yang belakang juga dianggap sebagai string
console.log(1 + 5 + '6');

// jika pengurangan dan pembagian maka semua akan dikonversikan menjadi number
console.log(5 - '3');
console.log('5' - 3);

console.log('5' / '4');
console.log(5 / '4');
console.log('5' / 4);

console.log(4 ** 2); //perpangkatan

// hasil yang sama
let a, b, c;

a = b = c = 3 + 3;
console.log(a);
console.log(b);
console.log(c);

let inc = 3;
inc++;
console.log(inc);

inc--;

let dec = 2;

dec--;

console.log(dec);

let coba = (1 - 2, 2 + 1, 5 + 2); //jika didepan koma maka tidak dihitung
console.log(coba);

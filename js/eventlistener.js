function coba() {
  a = document.querySelector('.isi');
  a.innerHTML = 'belajar event';
  console.log('coba event');
}

//judul.addEventListener('click', coba);

//judul.onmouseover = coba;

judul.onmouseover = function () {
  console.log('coba coba');
};

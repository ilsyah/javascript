$(document).ready(function () {
  let id = '';
  let pelanggan = '';
  let alamat = '';
  let telp = '';

  //Pengambilan DOM
  $('#submit').click(function (e) {
    e.preventDefault();
    id = $('#id').val();
    pelanggan = $('#pelanggan').val();
    alamat = $('#alamat').val();
    telp = $('#telp').val();
    //End

    // Bikin Kondisi Pada Id
    if (id == '') {
      insertData();
    } else {
      updateData();
    }
    // End

    $('#id').val('');
    $('#pelanggan').val('');
    $('#alamat').val('');
    $('#telp').val('');
  });

  $('#btn-tambah').click(function (e) {
    e.preventDefault();

    $('#titel').html('<p>Tambah Data</p>');

    $('#id').val('');
    $('#pelanggan').val('');
    $('#alamat').val('');
    $('#telp').val('');
  });

  // Event Click Pada button diTabel
  $('tbody').on('click', '.btn-hapus', function () {
    let id = $(this).attr('data-id');

    if (confirm('yakin akan menghapus? ')) {
      deleteData(id);
    }
  });

  $('tbody').on('click', '.btn-ubah', function () {
    let id = $(this).attr('data-id');
    $('#titel').html('<p>Ubah Data</p>');
    selectUpdate(id);
  });
  // End

  // SelectUpdate Data
  function selectUpdate(id) {
    let idpelanggan = {
      idpelanggan: id,
    };

    $.ajax({
      type: 'post',
      url: 'php/selectupdate.php',
      cache: false,
      data: JSON.stringify(idpelanggan),
      // dataType: "dataType",
      success: function (response) {
        let data = JSON.parse(response);

        $('#id').val(data.idpelanggan);
        $('#pelanggan').val(data.pelanggan);
        $('#alamat').val(data.alamat);
        $('#telp').val(data.telp);
      },
    });
  }
  //End SelectUpdate Data

  // Select Data
  function selectData() {
    $.ajax({
      type: 'get',
      url: 'php/select.php',
      cache: false,
      dataType: 'json',
      success: function (response) {
        let out = '';
        let no = 1;

        $.each(response, function (key, val) {
          out += `<tr>
          <td>${no++}</td>
          <td>${val.pelanggan}</td>
          <td>${val.alamat}</td>
          <td>${val.telp}</td>
          <td><button type="button" class="btn btn-danger btn-hapus" data-id=${val.idpelanggan}>Hapus</button></td>
          <td><button type="button" class="btn btn-warning btn-ubah" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id=${val.idpelanggan}>Ubah</button></td>

          </tr>`;
        });

        $('#isidata').html(out);
      },
    });
  }
  // End Select Data

  // Insert Data
  function insertData() {
    let dataPelanggan = {
      pelanggan: pelanggan,
      alamat: alamat,
      telp: telp,
    };

    $.ajax({
      type: 'post',
      url: 'php/insert.php',
      cache: false,
      data: JSON.stringify(dataPelanggan),
      // dataType: "dataType",
      success: function (response) {
        let out = `<p>${response}</p>`;
        $('#msg').html(out);
      },
    });

    selectData();
  }
  // End Insert Data

  // Delete Data
  function deleteData(id) {
    let idpelanggan = {
      idpelanggan: id,
    };

    $.ajax({
      type: 'post',
      url: 'php/delete.php',
      cache: false,
      data: JSON.stringify(idpelanggan),
      // dataType: "dataType",
      success: function (response) {
        let out = `<p>${response}</p>`;
        $('#msg').html(out);
      },
    });

    selectData();
  }
  // End Delete Data

  // Update Data
  function updateData() {
    let dataPelanggan = {
      idpelanggan: id,
      pelanggan: pelanggan,
      alamat: alamat,
      telp: telp,
    };

    $.ajax({
      type: 'post',
      url: 'php/update.php',
      cache: false,
      data: JSON.stringify(dataPelanggan),
      // dataType: "dataType",
      success: function (response) {
        let out = `<p>${response}</p>`;
        $('#msg').html(out);
      },
    });

    selectData();
  }

  selectData();
});
// End Update Data

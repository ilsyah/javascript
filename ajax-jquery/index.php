<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ajax-jquery-bootstrap-php</title>
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" />

    <script src="js/jquery.js"></script>
    <script src="js/app.js" defer></script>
</head>
<body>

    

    <div class="container">
        <div class="row mt-4">
            <h1>Belajar ajax jquery bootstrap php</h1>
        </div>
        <div class="row">
            <div class="col-4">
            <button type="button" id="btn-tambah" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Tambah Pelanggan
            </button>
            </div>
        </div>
        <div class="row mt-4">
            <!-- <div class="col-sm">
                <div class="row">
                    <h2>Input Data Pelanggan :</h2>
                </div>
                <div class="row">
                    <div id="msg"></div>
                    
                </div>
            </div> -->
            <div class="col-sm">
                <div class="row">
                    <h2>Data Pelanggan</h2>
                </div>
                <div class="row">
                    <table class="table">
                        <thead>
                            <tr>    
                                <th scope="col">No</th>
                                <th scope="col">Pelanggan</th>
                                <th scope="col">Alamat</th>
                                <th scope="col">No.Telp</th>
                                <th scope="col">Hapus</th>
                                <th scope="col">Ubah</th>
                            </tr>
                        </thead>
                        <tbody id="isidata">
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- Button trigger modal -->


        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="titel">Tambah Data</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <input type="text" hidden class="form-control" id="id"  required aria-describedby="emailHelp">
                                <label for="exampleInputEmail1" class="form-label">Nama Pelanggan :</label>
                                <input type="text" class="form-control" id="pelanggan" required aria-describedby="emailHelp">
                                <div id="emailHelp" class="form-text">Harus Diisi</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Alamat</label>
                                <input type="text" class="form-control" id="alamat" required>
                                <div id="emailHelp" class="form-text">Harus Diisi</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">No.Telp</label>
                                <input type="text" class="form-control" id="telp" required>
                                <div id="emailHelp" class="form-text">Harus Diisi</div>
                            </div>
                            <button type="submit" id="submit" data-bs-dismiss="modal" class="btn btn-primary">Kirim</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
</html>
let no = 1;

// Cari semua produk
$(".all").click(function (e) {
    e.preventDefault();
    let url = "https://dummyjson.com/products";
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            console.log(response.products);
            let out = '<table class="table mt-4 "><thead><tr><th scope="col">ID</th><th scope="col">Ttile</th><th scope="col">Descripsion</th><th scope="col">Price</th><th scope="col">Category</th><th scope="col">UPDATE</th><th scope="col">Cart</th></tr></thead><tbody>';
            $.each(response.products, function (key, val) {
                out += `<tr>
                <th scope="row">${val.id}</th>
                <td>${val.title}</td>
                <td>${val.description}</td>
                <td>${val.price}</td>
                <td>${val.category}</td>
                <td><button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal4" onclick="ubah(${val.id})">UPDATE</button></td>
                <td><button class="btn btn-primary" onclick="cart(${val.id})">Cart</button></td>
            </tr>`
            });
            out += '</tbody></table>';
            $("#tampil").html(out);
        }
    });
});


//Cari 1 kategori
$(".cate").click(function (e) {
    e.preventDefault();
    let link = "";
    let kategori = document.getElementById("select").value;
    if (kategori === "smartphones") {
        link = "smartphones";
    }
    if (kategori === "laptops") {
        link = "laptops";
    }
    if (kategori === "fragrances") {
        link = "fragrances";
    }
    if (kategori === "skincare") {
        link = "skincare";
    }
    if (kategori === "groceries") {
        link = "groceries";
    }
    if (kategori === "home-decoration") {
        link = "home-decoration";
    }
    let url = "https://dummyjson.com/products/category/" + link;
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            console.log(response.products);
            let out = '<table class="table mt-4 "><thead><tr><th scope="col">ID</th><th scope="col">Ttile</th><th scope="col">Descripsion</th><th scope="col">Price</th><th scope="col">Category</th></tr></thead><tbody>';
            $.each(response.products, function (key, val) {
                out += `<tr>
                    <th scope="row">${val.id}</th>
                    <td>${val.title}</td>
                    <td>${val.description}</td>
                    <td>${val.price}</td>
                    <td>${val.category}</td>
                </tr>`
            });
            out += '</tbody></table>';
            $("#tampil").html(out);
        }
    });
});

// Cari berdasarkan id
$(".one").click(function (e) {
    e.preventDefault();
    let id = document.getElementById("id").value;
    let url = "https://dummyjson.com/products/" + id;
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            console.log(response);
            let out = '<table class="table mt-4 "><thead><tr><th scope="col">ID</th><th scope="col">Ttile</th><th scope="col">Descripsion</th><th scope="col">Price</th><th scope="col">Category</th></tr></thead><tbody>';
            out += `<tr>
                    <th scope="row">${response.id}</th>
                    <td>${response.title}</td>
                    <td>${response.description}</td>
                    <td>${response.price}</td>
                    <td>${response.category}</td>
                </tr>`;
            out += '</tbody></table>';
            $("#tampil").html(out);
        }
    });
});

//Menambahkan
$(".add").click(function (e) {
    e.preventDefault();
    let url = "https://dummyjson.com/products/add";
    let produk = $("#produk").val();
    let deskripsi = $("#deskripsi").val();
    let kategori = $("#selected").val();

    let data = {
        title: produk,
        description: deskripsi,
        category: kategori
    };

    $.ajax({
        type: "POST",
        url: url,
        body: data,
        success: function (response) {
            console.log(data);
        }
    });
});

// Mengupdate
$(".update").click(function (e) {
    e.preventDefault();
    let id = $("#ide").val();
    let data = {
        id: $("#ide").val(),
        produk: $("#produki").val(),
        deskripsi: $("#deskripsie").val()
    };
    let link = "https://dummyjson.com/products/" + id;

    $.ajax({
        type: "patch",
        url: link,
        body: data,
        success: function (response) {
            console.log(data);
        }
    });
});

// Tampil Update
function ubah(idubah) {
    let url = "https://dummyjson.com/products/" + idubah;
    $.ajax({
        type: "get",
        url: url,
        data: "json",
        success: function (response) {
            $(".ha").val(response.title);
            $(".hi").val(response.description);
            $(".ho").val(response.id);
        }
    });
}

// Menghapus
$(".del").click(function (e) {
    e.preventDefault();
    let id = document.getElementById("ie").value;
    let url = "https://dummyjson.com/products/" + id;
    $.ajax({
        type: "delete",
        url: url,
        data: id,
        success: function (response) {
            console.log("id nomor " + id + " sudah dihapus");
        }
    });
});

// Cari data pelanggan
$(".plgn").click(function (e) {
    e.preventDefault();
    $.ajax({
        type: "get",
        url: "http://localhost/tugas-dummyjson/php/select.php",
        dataType: "json",
        cache: false,
        success: function (response) {
            console.log(response);
            let no = 1;
            let out = '<table class="table mt-4"><thead><tr><th scope="col">No</th><th scope="col">Pelanggan</th><th scope="col">Alamat</th><th scope="col">Nomor Telepon</th><th scope="col">Update</th><th scope="col">Hapus</th><th scope="col">Beli</th></tr></thead><tbody>';
            $.each(response, function (key, val) {
                out += `<tr>
                    <th scope="row">${no++}</th>
                    <td>${val.pelanggan}</td>
                    <td>${val.alamat}</td>
                    <td>${val.telp}</td>
                    <td><button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal7" onclick="update(${val.idpelanggan})">UPDATE</button></td>
                    <td><button class="btn btn-secondary" onclick="hapus(${val.idpelanggan})"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                </svg></button></td>
                <td><button class="btn btn-secondary" onclick="cartP(${val.idpelanggan})">Beli</button></td>
                </tr>`
            });
            out += '</tbody></table>';
            $("#tampil").html(out);
        }
    });
});

// Tambah Pelanggan
$(".addplgn").click(function (e) {
    e.preventDefault();
    let data = {
        pelanggan: $("#pelanggan").val(),
        alamat: $("#alamat").val(),
        telp: $("#telp").val()
    };
    $.ajax({
        type: "post",
        url: "http://localhost/tugas-dummyjson/php/insert.php",
        data: JSON.stringify(data),
        cahce: false,
        success: function (response) {
            window.location.href = "http://127.0.0.1:5500/";
            alert(response);
        }
    });
});

// Hapus Pelanggan
function hapus(idpelanggan) {
    let data = {
        idpelanggan: idpelanggan
    };
    $.ajax({
        type: "post",
        url: "http://localhost/tugas-dummyjson/php/delete.php",
        data: JSON.stringify(data),
        cahce: false,
        success: function (response) {
            window.location.href = "http://127.0.0.1:5500/";
            alert(response);
        }
    });
}

// Tampil Update
function update(idpelanggan) {
    let data = {
        idpelanggan: idpelanggan
    };
    $.ajax({
        type: "post",
        url: "http://localhost/tugas-dummyjson/php/selectupdate.php",
        data: JSON.stringify(data),
        cahce: false,
        success: function (response) {
            let data = JSON.parse(response);
            $(".ba").val(data.pelanggan);
            $(".bi").val(data.alamat);
            $(".bo").val(data.telp);
            $(".be").val(data.idpelanggan);
        }
    });
}

// Mengupdate
$(".updateplgn").click(function (e) {
    e.preventDefault();
    let dataPelanggan = {
        idpelanggan: $("#idey").val(),
        pelanggan: $("#pelanggani").val(),
        alamat: $("#alamate").val(),
        telp: $("#telpe").val()
    };
    $.ajax({
        type: "post",
        url: "http://localhost/tugas-dummyjson/php/update.php",
        data: JSON.stringify(dataPelanggan),
        cahce: false,
        success: function (response) {
            window.location.href = "http://127.0.0.1:5500/";
            alert(response);
        }
    });

});

// Cart
function cart(id) {
    // console.log(id);
    let url = "https://dummyjson.com/products/" + id;
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            // console.log(response);
            let out = '<table class="table mt-4"><thead><tr><th scope="col">Id</th><th scope="col">Product</th><th scope="col">Harga</th><th scope="col">Yang Pesan Ini</th></tr></thead><tbody>';
            out += `<tr>
                <td>${response.id}</td>
                <td>${response.title}</td>
                <td>${response.price}</td>
                <td id="order"></td>
                <td><button class="btn btn-secondary" onclick="checkout('${response.id}','${response.price}','${response.title}')">Checkout</button></td>
            </tr>`
            out += '</tbody></table>';
            $("#cart").html(out);
        }
    });
}

//Pembeli
var idplgn = "";
var nama = "";
var alamat = "";
function cartP(idpelanggan) {
    let url = "http://localhost/tugas-dummyjson/php/selectwhere.php?id=" + idpelanggan;
    $.ajax({
        type: "get",
        url: url,
        dataType: "json",
        success: function (response) {
            let out = response.pelanggan;
            $("#order").html(out);
            idplgn = response.idpelanggan;
            nama = response.pelanggan;
            alamat = response.alamat;
        }
    });
}

//Checkout
function checkout(idbarang, harga, barang) {
    let idorder = 2;
    let jumlah = 1;
    let data = {
        idorder: idorder,
        idbarang: idbarang,
        jumlah: jumlah,
        harga: harga,
        barang: barang,
        idpelanggan: idplgn,
        pelanggan: nama,
        alamat: alamat
    };

    $.ajax({
        type: "post",
        url: "http://localhost/tugas-dummyjson/php/addtocart.php",
        data: JSON.stringify(data),
        success: function (response) {
            console.log(response);
            alert('SUKSES');
            window.location.href = "http://127.0.0.1:5500/"
        }
    });
}

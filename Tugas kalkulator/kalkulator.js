function masuk(angka) {
    document.form.textarea.value = document.form.textarea.value + angka;
}

function hitung() {
    let hasil = document.form.textarea.value;
    document.form.textarea.value = eval(hasil);
}

function bersih() {
    document.form.textarea.value = "";
}

function hapus() {
    let hasil = document.form.textarea.value;
    document.form.textarea.value = hasil.substring(0, hasil.length - 1);
}
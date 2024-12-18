let angkaBoom = Math.floor(Math.random() * 100) + 1;
let angkaPemain = 0;
let permainanSelesai = false;

document.getElementById("pilih").addEventListener("click", function () {
  if (!permainanSelesai) {
    angkaPemain = parseInt(document.getElementById("angka").value);

    if (angkaPemain === angkaBoom) {
      document.getElementById("hasil").innerHTML = "BOOM!";
      document.getElementById("angka-boom").innerHTML =
        "Angka Boom: " + angkaBoom;
      permainanSelesai = true;
    } else if (angkaPemain < angkaBoom) {
      document.getElementById("hasil").innerHTML = "Angka terlalu rendah!";
      angkaPemain++;
      document.getElementById("angka").value = angkaPemain;
    } else {
      document.getElementById("hasil").innerHTML = "Angka terlalu tinggi!";
      angkaPemain--;
      document.getElementById("angka").value = angkaPemain;
    }
  }
});

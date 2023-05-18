function Change() {
   let user = prompt("Silahkan Tulis Sesukamu");
   let change = (document.getElementById("demo").innerHTML = `${user}`);
}

function Return() {
   let user =
      "Halooo, Coba ketik tombol dibawah ini, Dan lihatlah apa yang terjadi";
   let before = (document.getElementById("demo").innerHTML = `${user}`);
}

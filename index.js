var fullname = document.getElementById("fullname");
var hour = document.querySelector("#hours");
var birthday = document.getElementById("birthday");
var tel = document.getElementById("tel");
var ucret1 = document.getElementById("ucret");
const chckbox = document.getElementById("checkbox");
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
function kirala(pay) {
  if (hour.value === "Seçiniz") {
    alert("Lütfen saat seçiniz.");
  } else if (birthday.value === "") {
    alert("Doğum tarihinizi giriniz.");
  } else if (fullname.value === "") {
    alert("İsminizi giriniz.");
  } else if (tel.value === "") {
    alert("Telefon numaranızı giriniz.");
  } else {
    if (chckbox.checked) {
      console.log(chckbox);
      if (currentYear - birthday.value >= 21) {
        const ucret = hour.value * pay;
        window.location.href = "./success.html?pay=" + ucret;
      } else {
        alert(
          "Araba kiralamak için 21 yaşında veya büyük olmanız gerekmektedir."
        );
      }
    } else {
      alert("Lütfen Onay Kutucuğunu İşaretleyiniz.");
    }
  }

  event.preventDefault();
}

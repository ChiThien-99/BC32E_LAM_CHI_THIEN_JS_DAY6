// Bài tập 1
var tong = 0;
var soNguyenNN = 0;
var n = 1;

while (tong <= 10000) {
  tong += n;
  if (tong > 10000) {
    soNguyenNN = n;
  }
  n++;
}
document.getElementById("outputBT1").innerHTML =
  "Số nguyên dương nhỏ nhất là: " + soNguyenNN;
// Bài tập 2
function tinhTongSoMu(soX_ts, soN_ts) {
  var soX = Number(document.getElementById(soX_ts).value);
  var soN = Number(document.getElementById(soN_ts).value);
  var tong = 0;
  var n = 1;
  while (n <= soN) {
    tong += Math.pow(soX, n);
    n++;
  }
  return tong.toLocaleString("vi-VN");
}
document.getElementById("tinhBT2").onclick = function () {
  document.getElementById("outputBT2").innerHTML =
    "Tổng là: " + tinhTongSoMu("soX", "soN");
};
// Bài tập 3
document.getElementById("tinhBT3").onclick = function () {
  var soGiaiThua = Number(document.getElementById("soGiaiThua").value);
  var tich = 1;
  var n = 1;
  while (n <= soGiaiThua) {
    tich = tich * n;
    n++;
  }
  document.getElementById("outputBT3").innerHTML = tich.toLocaleString("vi-VN");
};
// Bài tập 4
document.getElementById("tinhBT4").onclick = function () {
  var tagDiv = "";
  var n = 1;
  while (n <= 10) {
    if (n % 2 == 0) {
      tagDiv +=
        "<div style='background-color:red;height:40px;color:white;'>Div chẵn " +
        n +
        "</div>";
    } else if (n % 2 !== 0) {
      tagDiv +=
        "<div style='background-color:blue;height:40px;color:white;'>Div lẻ " +
        n +
        "</div>";
    }

    n++;
  }
  document.getElementById("outputBT4").style.height = "auto";
  document.getElementById("outputBT4").innerHTML = tagDiv;
};

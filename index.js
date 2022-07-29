// Bài 1
/**
 * Đầu vào:
 * tạo biến sum1 là tổng
 * tạo biến n1 đế lấy giá trị của biến i trong vòng lặp
 * tạo biến result1 đế xuất kết quả đầu ra
 *
 * Xử lý:
 * Dùng vòng lặp for với i = 1, bước nhảy i++
 * cho n1 = i và sum1 += n1 với điều kiện sum1 < 10000 sẽ dừng vòng lặp
 *
 * Đầu ra:
 * xuất ra n1
 */

//Đầu vào:
let sum1 = 0;
let result1 = document.getElementById("result1");
let n1;
//Xử lý:
for (let i = 1; sum1 < 10000; i++) {
  n1 = i;
  sum1 += n1;
}

//Đầu ra:
result1.style.display = "block";
result1.innerHTML = "Số nguyên dương nhỏ nhất: " + n1;

//Bài 2
/**
 * Đầu vào:
 * lấy giá trị input vào các biến x2 và n2
 * tạo biến sum2 = 0 để tính tổng
 * tạo biến tich2 = 1 để tính tích
 * tạo biến result 2 để xuất kết quả đầu ra
 *
 * Xử lý:
 * dùng vòng lặp for i =1 , bước nhảy i++, điều kiện i <= n2
 * cứ mỗi lần lặp: tich2 = tich2 * x2
 * và sum2 = sum2 + tich2
 *
 * Đầu ra:
 * Xuất kết quả sum2 là tổng S(n) ra ngoài
 */

document.getElementById("tinhTong").onclick = function () {
  //Đầu vào:
  let sum2 = 0;
  let tich2 = 1;
  let result2 = document.getElementById("result2");
  let x2 = +document.getElementById("x2").value;
  let n2 = +document.getElementById("n2").value;

  //Xử lý:
  if (n2 < 1) {
    alert("giá trị n ko hợp lệ");
    return;
  }

  for (let i = 1; i <= n2; i++) {
    tich2 *= x2;
    sum2 += tich2;
  }

  //Đầu ra:
  result2.style.display = "block";
  result2.innerHTML = "Tổng S(n) = " + sum2;
};

//Bài 3:
/**
 * Đầu vào:
 * lấy giá trị input vào biến n3
 * tạo biến result3 để xuất kết quả đầu ra
 * tạo biến giaThua = 1 để tính kết quả giai thừa
 *
 * Xử lý:
 * dùng vòng lặp for i = 1; điều kiện lặp i <= n3; bước nhảy i++
 * mỗi lần lặp giaiThua *= i;
 *
 * Đầu ra:
 * xuất kết quả giai thừa: giaiThua
 */

document.getElementById("tinhGiaiThua").onclick = function () {
  //Đầu vào:
  let n3 = +document.getElementById("n3").value;
  let result3 = document.getElementById("result3");
  let giaiThua = 1;

  //Xử lý:
  if (n3 < 1) {
    alert("Giá trị n ko hợp lệ");
    return;
  }

  for (let i = 1; i <= n3; i++) {
    giaiThua *= i;
  }

  //Đầu ra:
  result3.style.display = "block";
  result3.innerHTML = "Giai thừa: " + giaiThua;
};

//Bài 4:
/**
 * Đầu vào:
 * tạo biến content = "" để chứa các div chẵn lẻ
 * tạo biến result4 để xuất kết quả đầu ra
 *
 * Xử lý:
 * dùng vòng lặp for với i = 1; điều kiện lặp i <= 10; bước nhảy i++
 * xét nếu i là số chẳn thì: content += "<div class='bg-danger'>Chẵn</div>";
 * nếu i là số lẻ thì: content += "<div class='bg-primary'>Lẻ</div>";
 *
 * Đầu ra:
 * Xuất kết quả đầu ra
 */

document.getElementById("taoThe").onclick = function () {
  //Đầu vào:
  let content = "";
  let result4 = document.getElementById("result4");

  //Xử lý:

  for (let i = 1; i <= 10; i++) {
    if (!(i % 2)) {
      content += "<div class='bg-danger'>Chẵn</div>";
    } else {
      content += "<div class='bg-primary'>Lẻ</div>";
    }
  }

  //Đầu ra:
  result4.style.display = "block";
  result4.innerHTML = content;
};

//Bài 5:
/**
 * Đầu vào:
 * lấy giá trị input vào biến n5
 * tạo biến result5 để xuất kết quả đầu ra
 * tạo biến soNguyenTo = "2" để đưa các số nguyên tố vào, do 2 là số nguyên tố nhỏ nhất nên xét sẵn 2 có trong soNguyenTo trước
 *
 * Xử lý:
 * dùng vòng lặp for với i = 3 vì 2 đã dc xét sẵn là số nguyên tố nên băt đầu từ 3, điều kiện i <= n5, bước nhảy i++
 * tạo 1 biến đếm count = 0 bên trong vòng lặp thứ 1, biến count dùng để đếm xem có bao nhiêu trường hợp chia hết ngoài trường hợp chia hết cho 1 và chính nó
 * tạo 1 vòng lặp ở bên trong với j = 2; điều kiện j < i; bước nhảy j++  
 * xét nếu i chia hết cho j thì biến count sẽ tăng 1 
 * xong sau đó sẽ xét nếu sau khi chạy hết vòng lặp ở bên trong mà count === 0 thì soNguyenTo += " "+ i; còn lại thì soNguyenTo += "";
 *
 * Đầu ra:
 * xuất kết quả các số nguyên tố ra
 */

document.getElementById("inSoNguyenTo").onclick = function () {
  //Đầu vào:
  let n5 = +document.getElementById("n5").value;
  let result5 = document.getElementById("result5");
  let soNguyenTo = "2";

  //Xử lý:
  for (let i = 3; i <= n5; i++) {
    let count = 0;
    for (let j = 2; j < i; j++) {
      if (!(i % j)) {
        count++;
      }
    }
    if (count === 0) {
      soNguyenTo += " "+ i;
    } else {
      soNguyenTo += "";
    }
  }

  //Đầu ra:
  result5.style.display = "block";
  result5.innerHTML = soNguyenTo;
};

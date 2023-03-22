// Bài 1: Dùng vòng lặp for, while để xuất ra các số chẵn từ 0 đến 100

// console.log('For');
// for (i = 0; i <= 100; i+= 2) {
//     console.log(i);
// }
// console.log('While');
// let a = 0;
// while (a <= 100) {
//     console.log(a);
// 	a+=2;
// }

// Bài 2: Nhập vào 2 tham số a, b, in ra thông báo so sánh giữa 2 số
// let a = parseInt(prompt('Nhập giá trị A'));
// let b = parseInt(prompt('Nhập giá trị B'));

// if (a > b) {
//     console.log(`${a} lớn hơn ${b}`);
// } else
// if (a < b) {
//     console.log(`${a} nhỏ hơn ${b}`);
// } 
// else {
//     console.log(`${a} và ${b} bằng nhau`);
// }

// Bài 3: Viết hàm nhập vào một số nguyên dương, in ra thông báo số đó là chẵn hay lẽ
// let a = parseInt(prompt(`Nhập giá trị:`));

// if (a < 0) {
//     console.log(`${a} không phải là số nguyên dương`)
// } else {
//     if (a % 2 == 0) {
//         console.log(`${a} là số chẳn`);
//     } else {
//         console.log(`${a} là số lẽ`);
//     }
// }

// Bài 4: Tính tổng các số nguyên dương từ 0 đến 100, xuất ra màn hình kết quả
// let sum = 0;

// for (i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// Bài 5: Thực hiện xử lý, nhập vào một ngày, hiển thị thông báo tên thứ trong tuần
// let inpDate = new Date(prompt(`Nhập vào 1 ngày dạng (yyyy-mm-dd):`));
// let days = [
//     'Chủ nhật',
//     'Thứ 2',
//     'Thứ 3',
//     'Thứ 4',
//     'Thứ 5',
//     'Thứ 6',
//     'Thứ 7',
// ];
// let dayOfWeek = days[inpDate.getDay()];

// console.log(`Ngày ${inpDate.getDate()} tháng ${inpDate.getMonth() + 1} năm ${inpDate.getFullYear()} là thứ ${dayOfWeek}`);

// Bài 6: Nhập vào một giá trị bất kì, kiểm tra giá trị là số nguyên, số thập phân hay là chữ
// let a = prompt(`Nhập giá trị bất kỳ:`);

// if (!isNaN(a)) {
//     if (Number.isInteger(parseFloat(a))) {
//         console.log(`${a} là số nguyên`);
//     } else {
//         console.log(`${a} là số thập phân`)
//     }
// } else {
//     console.log(`${a} là chữ`)
// }

// Bài 7: Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n.

// let n = prompt("Nhập số n:");
// if (n < 2) {
//     alert(`Nhập lại đi thanh niên. n phải lớn hơn 2`);
// }
// for ( i = 0; i < n; i++) {
//   let row = "";
//   for ( j = 0; j < n; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// Bài 8: Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n.

// let m = prompt(`Nhập số m:`);
// let n = prompt('Nhập số n:');

// if (n < 2 || m < 2) {
//     alert(`Nhập lại đi thanh niên. m,n phải lớn hơn 2`);
// } else {
//     for (i = 0; i < n; i++) {
//         let row = "";
//         for (j = 0; j < m; j++) {
//             row += `*`;
//         }
//         console.log(row);
//     }
// }

// Bài 9: Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n.
// let n = prompt("Nhập số n:");
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// Bài 10: Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả:
// Nếu BMI < 18.5 → in ra “Nhẹ cân”
// Nếu 18.5 <= BMI < 23 → in ra “Bình thường” 
// Nếu 23 <= BMI < 25 → in ra “Thừa cân”
// Nếu BMI >= 25 → in ra “Béo phì”

let w = parseFloat(prompt(`Nhập cân nặng (kg):`));
let h = parseFloat(prompt(`Nhập chiều cao (m) _ (1.72m):`));

let bmi = w / (h * h);
console.log(`Cân nặng: ${w} kg - Chiều cao: ${h} m _ Chỉ số BMI: ${bmi}`)
if (bmi < 18.5) {
    console.log(`Thanh niên nhẹ cân`);
} else 
if (bmi < 23) {
    console.log(`Thanh niên bình thường`);
} else
if (bmi < 25) {
    console.log(`Thanh niên thừa cân`);
} else {
    console.log(`SOS BÉO BÉO`);
}

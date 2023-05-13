let s = ['Nguyen', 'Huu', 'PhuNguyen', 0311, 1995, 'Nam']; 

// Tìm chuỗi đầu tiên có đọ dài nhỏ nhất.
// let minStr = s[0]; 

// for ( i = 1; i < s.length; i++) {
//   if (s[i].length < minStr.length) {
//     minStr = s[i]; 
//   }
// }

// console.log("Chuỗi đầu tiên có độ dài nhỏ nhất là:", minStr);

// Tìm những chuỗi trong mãng có giá trị text

// let sString = [];
// for (i = 0; i < s.length; i++) {
//     if (typeof s[i] === 'string') {
//         sString.push(s[i]);
//     }
// }

// if (sString.length > 0) {
//     console.log('Mảng có chứa giá trị Text');
//     console.log(sString);
// } else {
//     console.log(`Mảng không chứa giá trị Text`)
// }

// Tạo mảng newS gồm các phần tử có giá trị là 3 ký tự đầu tiên của từng phần tử trong s

// let newS = s.map(item => {
//     if (typeof item === 'string') {
//       return item.slice(0, 3);
//     } else {
//       return item;
//     }
// });
  
// console.log(newS);

// Tạo ra 1 chuỗi là các phần tử trong s. mỗi phần tử cách nhau bởi dấu '-'

// let joineStr = s.join('-');

// console.log(joineStr);

// includes() - kiểm tra tồn tại
let d1 = [2,15,6,7,10];
let d2 = [1,3,8];
// // Kiểm tra xem tất cả các giá trị trong d1 có trong d2 không
// d1.forEach((x) => {
//     if (!d2.includes(x)) {
//         console.log(`False`);
//         return;
//     }
// })

// let allInD2 = d1.every(item => d2.includes(item));

// if (allInD2 == true) {
//     console.log(`Tất cả giá trị d1 có trong d2`);
// } else {
//     console.log(`d1 có giá trị không nằm trong d2`);
// }

// Kiểm tra xem có phần tử nào của d2 chia hết cho d1 không
// let sumD1 = 0;

// d1.forEach( (item) => {
//     sumD1 += item;
// })
// console.log(`Tổng giá trị d1 : ${sumD1}`);

// let validate = true;

// d2.forEach( (item) => {
//     if (!(sumD1 % item == 0)) {
//         validate = false;
//         return;
//     }
// })

// if (validate == false) {
//     console.log(`d2 có phần tử không chia hết cho tổng d1`);
// } else {
//     console.log(`các phần tử d2 đều chia hết cho tổng d1`);
// }

// tạo mảng mới gồm các số có giá trị là các số chia hết cho 2 lần lượt trong mảng d2 và d1
// let result = [];

// d1.forEach(item1 => {
//     if (item1 % 2 == 0) {
//         result.push(item1);
//     }
// })
// d2.forEach(item2 => {
//     if (item2 % 2 == 0) {
//         result.push(item2);
//     }
// })

// console.log(result);

// giá sử d1, d2 là các dãy số có thứ tự tăng dần. Hãy tạo ra day số theo thứ tự tăng dần gồm các số d1, d2. theo thuật toán merge sort 
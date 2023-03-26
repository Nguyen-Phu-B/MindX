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
//       return item.substr(0, 3);
//     } else {
//       return item;
//     }
// });
  
// console.log(newS);

// Tạo ra 1 chuỗi là các phần tử trong s. mỗi phần tử cách nhau bởi dấu '-'

let joineStr = s.join('-');

console.log(joineStr);
  
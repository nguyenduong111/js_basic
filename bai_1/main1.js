

//comment, biến, hàm, toán tử, if else, string, const, Array

//comment 1 dong

/**
 * comment nhieu dong
 * 1
 * 2
 * 3
 * 4
 */ 

// bien
var fullName = 'nguyen thai duong';
var age = 26;


// cac ham hay dung

//1:  alert(); tao 1 thong bao (ok)
//alert(fullName);

//2:  confirm(); tao 1 thong bao (ok/cancel)
//confirm(fullName);

//3:  prompt(); tao thong bao de nhap something
//prompt('who are you? ');

//4:  console(); hien thi o console devtool

// console.log('hello duong'); // in ra
// console.warn('canh bao')   // in ra canh bao (vang)
// console.error('in ra loi')  // in ra loi (do)


//5:  setTimeout(function() { < do something> }, <time(ms)>)
// sau time(ms) se chay function()
/*
setTimeout(function() {
    console.log('pig thoi');
}, 3000)
*/

//6:  setInterval(function() { < do something> }, <time(ms)>)
// lap lai function() sau moi time(ms)
/*
setInterval(function() {
    console.log('duong xi ' + Math.random());
}, 1000)
*/

// if(0) {
//     console.log(b)
// } else {
//     console.log('a')
// }


// luu y voi toan tu logic && và ||

/*
+ neu bien bao gom cac toan tu &&
var result = 'a' && 'b' && 'c';
console.log(result);   // c
biến result sẽ đc gán lần lượt các giá trị a, b, và cuối cùng là c
nếu gặp "giá trị sai" sẽ dừng gán, trả về "giá trị sai"
var result = 'a' && null && 'b';   // null


+ nếu biến bao gồm các toán tử ||
var result = 'a' || 'b' || 'c';
consolt.log(result);   // a
biến result sẽ nhận giá trị đầu tiên trước toán tử ||
nếu giá trị đầu tiên là "giá trị sai", sẽ lấy giá trị tiếp theo trước ||
var result = null || 'a' || 'b';    // a;

*/ 

/**
 * cac dieu kien sai
 * 1: 0
 * 2: false
 * 3: '' - ""
 * 4: undefined
 * 5: NaN (Not a Number) // kiểm tra 1 biến có phải NaN hay ko: dùng isNaN(<tên biến>) : boolean
 * 6: null
 */


// kieu du lieu
/*
1, du lieu nguyen thuy: primitive data
number
string
boolean
undefined  // 1 biến mà chưa được gán giá trị thì sẽ có giá trị và kiểu dữ liệu là defined
null
symbol  // kiểu dữ liệu đặc biệt
*/

/*
2, dữ liệu phức tạp : complex data
array:  var ar = [1,2,3,4]
function
object:  var obj = {a:'x', b:'y', c:'z'}
*/


//String

/*
+ Hai cách tạo chuỗi
c1:  var str = 'nguyen duong';

c2:  var str1 = new String('nguyen duong');

nên dùng cách 1:
    ngắn hơn, nhanh hơn, có kiểu dữ liệu là string
    cách 2, dài hơn, kiểu dữ liệu là object

+ cách kiểm tra kiểu dữ liệu
    console.log(typeof <tên biến>);

+ cách dùng dấu backslash \
    console.log('nguyen duong \'thai\'')
    console.log('day la dau \\')

+ chuỗi cũng coi như mảng, tức có thể truy cập trực tiếp các phần tử qua toán tử  str[3]

+ độ dài chuỗi:
    <tên string>.length

+ temlate string (từ ES6)

ví dụ về nối chuỗi

cách 1:
var firstName = 'nguyen';
var lastName = 'duong';

// in ra "toi la: nguyen duong"

console.log('toi la: ' + firstName + ' ' + lastName);  // toi la: nguyen duong

cách 2 dùng template string
var firstName = 'nguyen';
var lastName = 'duong';

console.log(`toi la: ${firstName} ${lastName}`)   // toi la: nguyen duong

dấu "nháy huyền", ${<biến string>}, nếu ko phải biến kiểu string thì sẽ tự động đc convert sang string

*/

/*
+ Hằng số
khai báo : const <tên hằng> = <giá trị>

 lưu ý
+ hằng khi khai báo phải đc gán giá trị luôn
+ ko thể gán lại giá trị cho hằng
+ có thể thay đổi giá trị phần tử của hằng mảng
    const arr = [1,2,3,4]
    arr[0] = 8
+ có thể thay đổi giá trị của thuộc tính của hằng object
    const obj = {a:'x', b:'y', c:'z'}
    obj.b = 'w';
*/

// làm việc với number
/*
+ có 2 cách khai báo
    var age = 19;    // nên dùng
    var myAge = new Number(20);

+ các hàm hay dùng :
    chuyển từ number thành string
    var age = 19;
    var ageStr = age.toString();

    làm tròn số 
    var pi = 3.145
    var now = pi.toFixed()    // 3
    var now = pi.toFixed(0)   // 3
    var now = pi.toFixed(1)   // 3.1
    var now = pi.toFixed(2)   // 3.15

    sau khi làm tròn sẽ trở thành kiểu string
    console.log(typeof now)   // string
*/

//mảng Array
/*
+ kiểm tra biến có phải kiểu Array: Array.isArray(<tên biến>) : boolean
/
/ cách tạo mảng
//c1   // nên dùng
var languages = [
    'java',
    'ruby',
    'c++',
];

//c2: new Array();
var listName = new Array(
    'duong',
    'nhung',
    'binh',
);

+ trong 1 mảng có thể lưu được nhiều kiểu dữ liệu 1 lúc
var listName = [
    'duong',
    'nhung',
    'binh',
    123,
    {},
];

+ truy xuất phần tử : listName.lenght : int

*/
/*
// làm việc với mảng
 các hàm cơ bản thao tác với mảng

var languages = [
    'java',
    'ruby',
    'c++',
];

1. toString(): chuyển Array sang String
    console.log(languages.toString());
    // java,ruby,c++

2. join() : chuyển Array thành String (cả dấu ngăn cách)
    console.log(languaages.join())  // java,ruby,c++
    console.log(languaages.join(' '))   // java ruby c++
    console.log(languaages.join('-'))   // java-ruby-c++

3. pop(): xóa element cuối và trả về phần tử đã xóa (nếu hết phần tử thì trả về undefined)
    console.log(languaages.pop())   // c++
    console.log(languaages)   // ['java','ruby']

4. push(): thêm 1 element vào cuối và trả về độ dài mới của Array
    console.log(languaages.push('python'))   // 4
    console.log(languaages)   // ['java','ruby','c++','python' ]

5. shift(): giống pop() nhưng xóa phần tử đầu Array
6. unshift(): giống push() nhưng thêm vào đầu Array

7. splice(<vị trí>, <số phần tử xóa>, <elems muốn thêm>); xóa, chèn, cắt tại vị trí muốn
    // xóa
    languages.splice(1, 1)   // ['java','c++']
    // chèn
    languages.splice(1, 0, 'dart')   // ['java','dart','ruby','c++']
    // vừa xóa vừa chèn
    languages.splice(1, 2, 'dart')   // ['java','dart']

8. concat(<biến nối thêm>); nối 2 mảng lại
var languages = [
    'java',
    'ruby',
    'c++',
];

var languages2 = [
    'duong',
    'nhung',
];

console.log(languages.concat(languages2)) 
// ['java','ruby','c++','duong','nhung']

9. spice(<vị trí đầu>, <vị trí cuối>): lấy các phần tử từ vị trí đầu đến vị trí cuối (ko tính vị trí cuối)
var languages = [
    'java',
    'ruby',
    'c++',
];

console.log(languages.slice(1))  // ['ruby','c++']
console.log(languages.slice(1, 2))  // ruby


*/

var languages = [
    'java',
    'ruby',
    'c++',
];

// console.log(languages.slice(1))  // ['ruby','c++']
console.log(languages.slice(0, 2))  // ruby








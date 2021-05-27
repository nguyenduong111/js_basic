
// ***lưu ý
// "use strict"
// NPM
// import / export

// 1. "use strict"

/*
+ Khi 1 đoạn lệnh đc khai báo "use strict" thì các dòng code bên dưới đc quản lý chặt
chẽ về cú pháp hơn
+ thường dùng trong các func
*/

// ko cho gán giá trị cho biến chưa khai báo

// báo lỗi khi cố sử dụng delete cho phần tử ko thể xóa

"use strict"
function getName (name)
{
    alert(name)
}
delete getName;  // false

// các tham số trong hàm ko trùng nhau

//ko khai báo biến dạng nhị phân

//ko ghi đè thuộc tính chỉ đọc (read only)

"use strict"
var obj = {};
Object.defineProperty(obj, 'ver', {value: 1, writable: false});
obj.ver = 10;    // false

// ko sử dụng đc with

"use strict"
var person = {
    firstName: "John",
    lastName: "Doe",
    age: "18",
    country: "Greenland"
  };
  
//   console.log("Hi, my name is " + person.firstName + " " +
//   person.lastName + ". I'm " + person.age +
//   " years old, and live in " + person.country + ".");

with(person) {      // false
    console.log("Hi, my name is " + firstName + " " + lastName +
        ". I'm " + age + " years old, and live in " + country + ".");
}

// ko chấp nhận các tên biến sau 
/**
 * implements
 * interface
 * let
 * package
 * private
 * protected
 * public
 * static
 * yield
 * arguments
 */


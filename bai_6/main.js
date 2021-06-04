
// html dom
// các phương thức dom
// dom elem, dom attribut, dom text
// dom style
// ClassList Property




// DOM document Object Model: là 1 tiêu chuẩn làm web của w3c đưa ra

// có 3 thành phần
/**
 * 1. Element (các thẻ,..)
 * 2. Attribute (các thuộc tính)
 * 3. Text (đoạn chữ)
 */

/*
khi sử dụng js, có thể truy cập vào html dom để thay đổi 3 thành phần trên
 */

//lưu ý: html dom ko phải của js, js cung cấp phương tiện để truy xuất vào dom


//viết vào dom
document.write('nguyen duong')

// element: 
// gọi element thông qua: id, class, tag, css selector, html collection

// lấy thông qua id
var headingNode = document.getElementById('heading')
console.log([headingNode]);

// lấy qua class name
var classNodes = document.getElementsByClassName('binh')
console.log(classNodes);

//lấy qua tag name

var tagsNode = document.getElementsByTagName('h1');
console.log(tagsNode);

// lấy qua css selector
// gọi css như thế nào thì trong doc vẫn như thế 
var seclecNodes = document.querySelector('.binh');  
console.log(seclecNodes);

// ví dụ muốn truy cập vào class="binh" thứ 2
var seclecNodes_2 = document.querySelector('.binh:nth-child(2)');
console.log(seclecNodes_2);

// var seclecNodes_2 = document.querySelectorAll('.binh') // trả về tất cả các css selector có class .binh

// html collection

// document.anchors : trả về tag a chứa attribute name=""

// document.form.<tên id form> ; trả về thẻ form có id=""

// có thể truy cập từ 1 node ngoài đã truy cập để vào các node con

var box = document.querySelector('.box');
console.log(box);

console.log(box.querySelectorAll('.binh'));

// node attribute và node text

// DOM attribute

var headingElem = document.querySelector('.box h3');
console.log(headingElem);

// c1: chỉ dùng với attribute hợp lệ với tag
headingElem.title = 'headingElem';  // thêm attribute title

headingElem.id = 'headingElem';

headingElem.className = 'headingElem'

// c2: dùng hàm để xét attribute (kể cả ko hợp lệ với thẻ)

headingElem.setAttribute('href', 'nguyenduong');

// lấy ra value của attribute

console.log(headingElem.getAttribute('title'));

// DOM text

// lấy text từ elem ra
console.log(headingElem.innerText);
console.log(headingElem.textContent);  // giống nhau

//thay đổi text trong elem
headingElem.textContent = 'cam nhung';

/*
 innerText khác textContent
+ innerText: lấy ra text hiện lên kết quả
+ textContent: lấy ra nguyên bản text trong file html
*/

// thêm 1 elem vào trong 1 elem

// ví dụ thêm 1 thẻ h1 vào div .box:   innerHTML
headingElem.innerHTML = '<h1 class="check">them h1 vao div</h1>';

// xem các thuộc tính 
console.log([headingElem]);

// DOM style (css) (viết cú pháp css theo camelCase), css inline (viết trực tiếp vào tag html)

// cách 1
box.style.backgroundColor = 'blue';
box.style.width = '400px';
box.style.height = '200ox'

//cách 2
Object.assign(box.style, {
    position: 'relative',
    top: '50px',
    left: '100px'
    //style,....
});

// xem thêm các thuộc tính của  style
console.log(box.style);

// ClassList Property
// quản lý các class trong elem

console.log(box.classList);

// các thuộc tính thường dùng

// kiểm tra 1 elem có bao nhiêu class

console.log(box.classList.length);   // 2

// lấy ra tên class trong elem

console.log(box.classList.value);    // box box-2

// thêm 1 class vào elem
// thêm class .red và .blue vào elem box
// thêm kiểu css inline

box.classList.add('red', 'blue');

// kiểm tra 1 class có trong elem ko

box.classList.contains('red');

// xóa 1 class trong elem

box.classList.remove('blue');

// xóa 1 class nếu có trong elem, thêm class vào nếu ko có tronng elem

box.classList.toggle('blue');

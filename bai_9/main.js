
// điểm mới trong js es6
// var / let, const
// arrow func: hàm mũi tên
// template string
// multi-line string
// classes
// Enhanced obj literals: các định nghĩa key, value cho obj
// default parameter values 
// destructuring + rest
// spread
// tagged teamplate literals
// module

// 1. var / let, const

/*
+ var: khởi tạo biến toàn cục
        đc hỗ trợ hosting (có thẻ gán trước khi khai báo)
+ let: biến cục bộ, ko hosting

+ const: hằng số cục bộ, ko hosting
    chỉ gán giá trị 1 lần, ko gán lại lần thứ 2
    (lưu ý với hằng obj, ko thẻ gán lại obj, nhưng có thẻ gán lại thuộc tính của obj)
        const myObj = {name:'duong'};

        myObj = {age:20};     // lỗi

        myObj.name = 'nhung'    // true

*/

// 2. arrow function

// function logger(log) {
//     console.log(log);
// }

// vd 1
const logger = (log) => {
        console.log(log);
};
logger('mess');

// vd 1.1
const logger_2 = log => console.log(log);

// vd 2
const sum = (a, b) => a + b;
console.log(sum(1, 2));

// vd 3
const myObj = (a, b) => ({
        a: a,
        b: b
});
console.log(myObj('duong', 20));

// LƯU Ý: ko sử dụng arrow func với constructed func

// vd constructed func
const course = function(name, coin) {
        this.name = name;
        this.coin = coin;
}

const menu = new course('js', 900);
console.log(menu);

// 3. template string: nối string

// cách thông thường
var firstName = 'nguyen';
var lastName = 'duong';
var fullName = firstName + ' ' + lastName;

console.log(fullName);    // nguyen duong

// dùng template string

var fullName_2 = `${firstName} ${lastName}`;

console.log(fullName_2);

// 4. multi-line string: viết nhiều dòng
const line = `line1
line2
line3`;
console.log(line);

// 5. classes

//constructor func
/*
function Courses(name, price) {
        this.name = name;
        this.price = price;

        this.getName = function() {
                return this.name;
        }
}
*/

// classes

class Courses {
        constructor(name, price) {
                this.name = name;
                this.price = price;
        }

        getName() {
                return this.name;
        }
};

const jsCourse = new Courses('js', 900);

// 6. Enhanced obj literals: các định nghĩa key, value cho obj

// định nghĩa key cho obj dạng biến
var Name = 'new-name';
var Price = 'price';

const h = {
        id: 123,
        [Name]: 'nguyen duong',
        [Price]: 1000,
        getName() {
                return this.id;     // định nghĩa method cho obj
        }
};

console.log(h.getName());

// 7. default parameter values: giá trị mặc định cho tham số

function logger_3(log = false) {
        if(!log) {
                console.log('hihi');
        }
};

// 8. destructuring: phân rã (arr và obj)
//    rest parameters: phần tử rest (lấy ra những phần còn lại) (*tránh nhầm với toán tử ... Spread)

// Array
var arr = ['js', 'c++', 'python'];

// cách thông thường để lấy phần tử: 
var a = arr[0];

// dùng destructuring
var [a, b, c] = arr;     // a = arr[0], b = arr[1], c = arr[2]

var [d, , e] = arr       // d = arr[0], e = arr[2]

// kết hợp destructuring + rest để lấy ra arr[0] và phần còn lại (arr[1], arr[2])
var [f, ...rest] = arr;
// f = arr[0]
// rest = [arr[1], arr[2]]   // lưu ý rest chỉ là tên biến, đặt sao cũng đc
//                                rest trả về 1 arr mới chứa phần tử

// var [g, h, ...newA] = arr;
// g = arr[0]
// h = arr[1]
// newA = [arr[2]]

// Object
var menu_1 = {
        name: 'js',
        coin: 900.,
        id: 1234,
        children: {
                name: 'c++'
        }
};

// dùng destructuring
var {name, coin} = menu_1;
// name = 'js'
// coin = 900
// lưu ý, sử dụng destructuring với obj, biến truyền vào phải là key của obj

// var {NAME, coin} = menu_1; // false do trong menu_1 ko có key NAME

var {name, ...newObj} = menu_1;
// name = 'js'
// newObj = {coin: 900, id: 1234};   

// xử lý khi có obj con
// muốn lấy ra name của obj con

//var {name, children: {name}} = menu_1; // false do trùng key
//                                   khi này cần thay tên biến gán vào nhưng vẫn phải để key

var {name, children: {name: nameChild}} = menu_1;
// name = 'js'
// nameChild = 'c++'

// khi lấy ra 1 giá trị chưa đc định nghĩa trong obj

var {name, description = 'default'} = menu_1;
// name = 'js';
// description = 'default';  nếu trong obj ko có key description thì trả về 'default'

// sử dụng rest với hàm func
function logger_4(...params) {
        console.log(params);
}

logger_4(1,2,3,4,5,6,7);
// nhận đc nhiều tham số
// [1,2,3,4,5,6,7]: Arr

/*
function logger_4(a, b, ...params) {
        console.log(a);
        console.log(b);
        console.log(params);
}

logger_4(1, 2, 3, 4, 5, 6);
// 1
// 2
// [3,4,5,6]
*/

/*
function logger_4({name, coin, ...param}) {
        console.log(name);
        console.log(coin);
        console.log(params);
}

logger_4({
        name: 'py',
        coin: 1000,
        des: default
});
// 'py'
// 1000
// {des: default}
*/

/*
lưu ý rest: chỉ trong 2 trường hợp
+ 1: dùng với destructuring
+ 2: dùng làm tham số truyền vào func

+ các trường hợp còn lại có ... là spread
*/

// 9. spread: toán tử giải (arr, obj)
// ví dụ : ['js', 'c', 'py'] giải ra -> 'js', 'c', 'py'
// ví dụ nối 2 arr
var arr1 = ['js', 'c', 'py'];
var arr2 = ['ruby', 'go'];
var arr3 = [...arr2 , ...arr1];  // ['ruby', 'go', 'js', 'c', 'py']

// tương tụ với obj
// lưu ý: nếu các obj có trùng key, khi giải ra sẽ lấy key cuối lm giá trị

// 10.tagged teamplate literals

function hightlight(...rest) {
        console.log(rest);
}

var a = 'hai hau';
var b = 'nam dinh';

hightlight`huyen ${a}, tinh ${b}!`;    // 1
/* 
  trả về 1 arr chứa các phần tử gồm
  phần tử 0: 1 mảng gồm các string không phải nội suy, lần lượt trong 1
  các phần tử sau lần lượt là các biến nội suy trong 1 lần lượt
*/

// 11. module
/*
        thao tác với nhiều file, mỗi file 1 chức năng
        key: import
             export 
*/

// 12. optional chaining (?.)
// khi ko chắc chắn 1 key, arr, func trong obj có tồn tại hay ko

//vd
const obj = {
        name: 'duong',
        cat: {
                name: 'm',
                cat2: {
                        name: 'm2',
                        cat3: {
                                name: 'm3'
                        }
                }
        }
};

if(obj?.cat?.cat2?.cat3) {    // kiểm tra xem có tồn tạii cat cat2 cat3 hay ko
        console.log(obj.cat.cat2.cat3.name);
}

/*
obj.val?.prop
obj.val?.[expr]
obj.arr?.[index]
obj.func?.(args)
*/

var arr_4 = [1,2,3,4];

if(arr_4?.[7]) {     // nếu tồn tại arr_4[7]
        console.log(arr_4[7]);
}
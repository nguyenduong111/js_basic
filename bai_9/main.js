// điểm mới trong js es6
// var / let, const
// arrow func: hàm mũi tên
// template string
// multi-line string
// classes
// Enhanced obj literals: các định nghĩa key, value cho obj
// default parameter values 

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








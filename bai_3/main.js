
// switch case, toán tử 3 ngôi (ternary operator), vòng lặp(for, for/in, for/of,...), break/continue
// Array methods, includes() (String/Array), Math obj


/*
+ toán tử == là so sánh bằng (có thể khác kiểu)
    vd:
        var test = 3;
        if(test == 3)    //true
        if(test == '3')  //true
        if(test === 3)   //true
        if(test === '3') //false

+ toán tử === là so sánh bằng cùng kiểu
+ tương tự vs != và !==
*/

// switch case : (giống C++)
/*
var date = 1;

switch(date) {
    case 2:
        console.log("nay là thứ 2");
        break;
    case 3:
        console.log("nay là thứ 3");
        break;
    case 4:
        console.log("nay là thứ 4");
        break;
    default:
        console.log('ko co gia tri')
}
*/
//lưu ý :
/*
switch case sử dụng toán tử === để so sánh 
*/

/*
// toán tử 3 ngôi : giống C++
var coin = 45;
var kq = coin > 0 ? `${coin}:coin` : 'free';
console.log(kq)

*/

// vòng lặp

/*

1. for (giống c++)
2. for/in lặp qua các key đối tượng (array, obj, string)
3. for/of lặp qua các value của đối tượng
4. while
5. do/while

*/

/*
//for/in
var  myInfor = {
    name: 'nguyen duong',
    age: 19,
    year: '11/01/2001'
}
//console.log(myInfor.age)
for(var key in myInfor) {   // chạy với số key của obj, key là (name, age, year)
    console.log(myInfor[key]);  //truy cập như Array
}

//for/of (ko dùng trực tiếp vs object)
var languages = [
    'viet nam',
    'trung',
    'nhat',
    'han'
]
for(var value of languages) {  // chạy với số phần tử trong mảng, value là giá trị các phần tử
    console.log(value);
}

//với obj muốn sử dụng for/of ta phải lấy ra mảng key (hoặc value) rồi mới sử dụng for/of
// cách lấy ra mảng key
    var key = Object.keys(myInfor);  // mảng các key trong obj myInfo
    console.log(key);
    for(var i of key) {
        console.log(myInfor[i])      // in ra các value 
    }

// cách lấy ra mảng value
    var value = Object.values(myInfor);
    console.log(value);
    for(var val of value) {
        console.log(val);
    }
*/

// break / continue giống c++

// array methods
/**
 * forEach()
 * every()
 * some()
 * find()
 * map()
 * reduce() 
 */

// array vd
/*
var courses = [
    {
        id: 1,
        name: 'js',
        coin: 250
    },
    {
        id: 2,
        name: 'python',
        coin: 450
    },
    {
        id: 3,
        name: 'java',
        coin: 0
    },
    {
        id: 4,
        name: 'python',
        coin: 300
    }
]
*/

//var courses_2 = []

//  var courses_2 = [
//     {
//         id: 1,
//         mane: 'js',
//         coin: 250
//     }
// ]


/*
// forEach(): duyệt qua các phần tử của mảng, như duyệt bằng vòng for
// <nameArray>.forEach(elem_1, elem_2): elem_1 đc gán lần lượt các giá trị Array, elem_2 đc gán lần lượt index của Array
courses.forEach(function(course, index){
    console.log(index);
    if(index == 2) {
        course.year = 2019;
    }
    console.log(course);    
})

//every(): trả về kiểu boolean, duyệt lần lượt qua từng phần tử xem tất cả có thỏa mãn đkiện ko
var isFree = courses.every(function(course, index){
    return course.coin === 0;    // điều kiện kiểm tra
})
console.log(isFree);

//some(): trả về kiểu boolean, duyệt lần lượt qua từng phần tử xem có ít nhất 1 phần tử thỏa mãn đkiện ko
var free = courses.some(function(course, index){
    return course.coin === 0;    // điều kiện kiểm tra
})
console.log(free);

//find(): tìm kiếm theo kiều kiện, trả về phần tử thỏa mãn(1 phần tử đầu tiên tìm thấy  ) hoặc undefined
var Find = courses.find(function(course, index){
    return course.name === 'python';    // điều kiện kiểm tra
})
console.log(Find);

//filter(): tìm kiếm theo kiều kiện, trả về phần tử thỏa mãn(tất cả phần tử  tìm thấy (mảng) ) hoặc undefined
var findAll = courses.filter(function(course, index){
    return course.name === 'python';    // điều kiện kiểm tra
})
console.log(findAll);
*/

//map(): chỉnh sửa, thay đổi các phần tử của array

/*
function courseHandler(course, index) {
    return {
        id: course.id,
        name: `khóa học : ${course.name}`,
        coin: `giá : ${course.coin}`,
        text: course.coin === 0 ? 'free' : 'not free',
        index: index
    };
}

var newCourses = courses.map(courseHandler);

console.log(newCourses);
*/

/*
+ cách hoạt động : map(function() {do something}) sẽ tạo ra vòng lặp duyệt lần lượt từng phần tử của mảng, tại mỗi phần tử thực hiện sự thay đổi trong function()
+ function() trả về cái gì thì đó sẽ là phần tử mới của mảng newCourese
+ số lượng phần tử của newCourese sẽ bằng coureses 
*/

// reduce() : nhận về một giá trị nào đó sau khi duyệt qua các phần tử của mảng

// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//     return accumulator + currentValue.coin;  // trả về tổng coin
// }

/*
+ accumulator: biến lưu trữ, ở lượt đầu tiên accumulator đc gán biến initial value, từ lượt sau, function return cái gì thì accumulator sẽ đc gán cái đó
+ currentValue: giá trị hiện tại đang xét
+ currentIndex: chỉ số hiện tại (nếu cần thì thêm vào)
+ originArray: mảng nguồn, chính là array gốc courses (nếu cần thì thêm vào)
*/

//var totalCoin = courses.reduce(coinHandler, 0);  // (function() {}, initial value(biến khởi tạo))

/*
+ totalCoin sẽ đc gán giá trị cuối cùng của accumulator
+ initial value nếu ko khởi tạo thì sẽ lấy phần tử đầu tiên của Array để lm initial value
*/

//console.log(totalCoin);

// includes():(boolean) tìm kiếm trong String/Array xem có tồn tại phần tử chỉ định ko

/*
// vs Array:
var coureses = [
    'java',
    'php',
    'python',
    123
]

console.log(coureses.includes('php', 0))

// đối số thứ 2( vị trí bắt đầu tìm) ko cần phải có, mặc định là từ 0, 

//String
var str = 'nguyen thai duong'

 console.log(str.includes('duong'))
*/ 

// Math obj

// 1: Math.PI : số pi
console.log(Math.PI)         //13.4...

// 2: Math.round(): làm tròn
console.log(Math.round(12.3))     // 12

// 3: Math.abs(): lấy trị tuyệt đối
console.log(Math.abs(-123.3))    // 123.3

// 4: Math.ceil(): làm tròn trên
console.log(Math.ceil(4.001))   // 5

// 5: Math.floor(): làm tròn dưới
console.log(Math.floor(5.99))     // 5

// 6: Math.random(): số thập phân ngẫu nhiêu 0 < x < 1
console.log(Math.random());     // 0 < x < 1
console.log(Math.floor(Math.random() * 5))  // random số nguyên từ 0 đến 10

// 7: Math.min(): trả về số nhỏ nhất
console.log(Math.min(-100, 23, 43))   // -100

// 8: Math.max(): trả về số lớn nhất
console.log(Math.max(-100, 23, 43))   // 43


// hàm, tham số hàm, object, object contructor, obj prototype, Date obj

// hàm function()
/*
+ có hai loại hàm :
    1.Built-in: đã đc định nghĩa
    2.tự định nghĩa

+ tính chất :
    1. không thực thi khi định nghĩa
    2. thực thi khi đc gọi tên
    3. có thể nhận tham số
    4. có thể return

+ quy tắc đặt tên:
    a-z, A-Z, 1-9, _, $
    + không đc đặt số là kí tự đầu tiên
*/
/*
// định nghĩa hàm
function showDialog() {
    alert('nguyen duong!!');
}

// toán tử call () để gọi hàm
showDialog();
*/
/*
// tham số trong hàm
function writeLog(message) {
    console.log(message);
}
*/
/*
function <tên hàm>(<tham số>) {
    do something
}
*/
/*
writeLog('thai duong');

// <tên hàm>(<đối số>);
*/

// đối tượng arguments
/*
function writeLog() {
    var str = '';
    var temp = 0;
    for(var i of arguments) {
        temp++;
        str += i;
        if(temp < arguments.length) {
            str += ' - '
        }
    }
    console.log(str);
}

writeLog('a', 'b', 3.14, 'd', 'e', 'f');
*/

// đối tượng arguments
/*
+ không cần truyền số tham số  khi định nghĩa hàm
+ arguments có kiểu là object
+ arguments sẽ nhận các đối số đc truyền vào dưới dạng Array (nhưng ko truy xuất từng phần tử như Array đc: ví dụ arguments[i] )
+ console.log(arguments)  // ['a', 'b', 3.14, 'd', 'e', 'f']
+ truy xuất số lượng đối số truyền vào: arguments.length
+ truy xuất từng đối số truyền vào bằng vòng lặp for of
    for(var i of arguments) {
        do something
    }
    khi này biến i sẽ đc gán lần lượt giá trị từng đối số trong arguments đến hết
*/

//return trong function
/*
function cong(a, b) {
    return a + b
}

var sum = cong(2, 8)
console.log(sum)
*/
/*
+ return có thể trả về mọi kiểu giá trị
+ các câu lệnh sau return đều sẽ bị bỏ qua
*/

//một số lưu ý với function
/**
* khi định nghĩa nhiều function trùng tên
    khi đó function đc định nghĩa cuối cùng sẽ ghi đè tất cả các function trên (hay chỉ sử dụng đc function đc đinhj nghĩa cuối cùng)
* định nghĩa function2 trong function1
    có thể định nghĩa đc thế nhưng func2 chỉ đc sử dụng trong phạm vị func1
*/

// các loại function
/**
 * declaration func
 * expression func
 * arrow func
 */
/*
// declaration func
    function <tên func> () {
        do something
    }
+ bắt buộc phải có tên
+ có hosting: nghĩa là có thể gọi func trước khi định nghĩa func
*/
/*
// expression func
// các ví dụ

var showMess = function <tên func>() {
    do something
}

setTimeout(function() {

});

var myObj = {
    myFunc: function() {

    }
}

+ không bắt buộc phải có tên, tên chỉ để thể hiện ý nghĩa func
*/
/*
// arrow func: hàm mũi tên
+ ví dụ
    declaration func:
        function hello() {
            console.log('hello')
        }
        hello()

    arrow func:
        hello = () => {
            console.log('hello')
        }
        hello()

+ sẽ học kĩ ở sau

*/

// object

// ví dụ về object
/*
var myInfo = {
    name: 'nguyen duong',
    age: 19,
    address: 'nam dinh',
    '12abc': 110101,
    getName: function() {
        return this.name;  // this là con trỏ ngầm định cho object
    } 
}

console.log(myInfo);
*/

// lưu ý:
/*
+ tên key đc đặt theo quy tắc đặt tên biến, hàm
+ nếu muốn đặt key ko theo quy tắc đặt tên biến, hàm thì phải chuyển key đó thành string ('12abc')
+ function --> phương thức/ method
+ others --> thuộc tính/ property
*/

/*
// thêm key-value mới 
//c1
myInfo.email = 'duong.nt@mail.com';

//c2: nếu tên key muốn đặt ở dạng string
myInfo['my-email'] = 'nhung.vtc@mail.com';

//c3: key mới là 1 biến
var emailKey = 'email';

var myInfo = {
    name: 'nguyen duong',
    age: 19,
    address: 'nam dinh',
    '12abc': 110101,
    [emailKey]: 'duong.nt@mail.com' 
}

//lấy value, biết key 
//c1
console.log(myInfo.name);
console.log(myInfo.getName());

//c2: key là 1 string
console.log(myInfo['12abc']);

//c3: có biến ngoài
var myKey = 'address';
console.log(myInfo[myKey]);

//xóa key-value
delete myInfo.name;
delete myInfo[myKey];
delete myInfo['12abc'];
*/

// object constructor, function constructor, hàm tạo   

//tạo obj constructor
function User(firstName, lastName, avatar) {           //declaration funnc
//var User = function(firstName, lastName, avatar) {   //expression func
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// lưu ý :
/*
+ tên của obj constructor quy ước viết hoa chữ cái đầu
+ obj contructor không phải là đối tượng, nó chỉ mô tả đối tượng
+ obj constructor có thể đc tạo bởi declaration func hoặc expression func
*/
// tạo đối tượng
var teacher = new User('Vũ', 'Nhung', 'avt');
var student = new User('Nguyễn', 'Dương', 'avt');

/*
+ phải dừng từ khóa new
+ sau khi cấp phát teacher và student mới là 1 đối tượng obj
+ muốn truy xuất constructor của đối tượng có thể làm như sau
    console.log(teacher.constructor);
*/

// thêm thuộc tính đặc trưng cho từng đối tượng
student.id = '1a2b3c';
teacher.email = 'teacher@mail.com'

// obj prototype
/*
+ thêm thuộc tính sau khi đã có hàm tạo
+ sau khi thêm, tất cả các obj đc tạo từ hàm tạo đó đều sẽ nhận đc 
+ dùng để KẾ THỪA các hàm tạo
*/
/*
// thêm thuộc tính và phương thức
User.prototype.schoolName = 'THPT C';
User.prototype.getSchoolName = function() {
    return this.schoolName;
}
*/
//kế thừa
function congNhan(age) {    // hàm kế thừa
    this.age = age;
}

congNhan.prototype = new User('vu', 'khai', 'avt');  // kế thừa hàm User

var cn_1 = new congNhan(20);

console.log(cn_1); 
console.log(cn_1.getName());
//console.log(teacher);
//console.log(student.getSchoolName());

// đối tượng đc tạo mặc định Date obj









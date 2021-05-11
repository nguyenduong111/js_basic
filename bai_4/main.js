
// callback, 
// định nghĩa phương thức trong array, 
// mở rộng kiến thức array 

/*
 + là hàm (func) đc truyền qua đối số của func khác
 + khi gọi hàm khác

 đkiện: là 1 callback
        1. là hàm func
        2. đc truyền qua đối số
        3. đc gọi lại trong hàm nhận đối số
*/

function myFunc(param) {
    if(typeof(param) == 'function') {
        param('nguyen duong');
    }
}
/*
thông thường sẽ phải thêm 1 bước check param là 1 func để tránh lỗi
*/


function myCallback(value) {
    console.log('Name: ', value);
}

// ví dụ callback 
myFunc(myCallback);    // Name: nguyen duong

// ví dụ 2, callback với mảng
var courses = [
    'js',
    'c++',
    'go'
];

var htmls = courses.map(function(course) {
    return `<h2>${course}</h2>`;
});

console.log(htmls.join());

// định nghĩa 1 phương thức mới trong array
Array.prototype.map2 = function(callback) {
    var arrLength = this.length;
    for(var i = 0; i < arrLength; i ++) {
        callback(this[i], i);
    }
}

courses.map2(function(course, index) {
    console.log(course, index);
});

// ví dụ với array trong trường hợp có phần tử trống (empty)

console.log(courses.length);  // 3

// trong js có thể thay đổi giá trị length của mảng

courses.length = 10;

console.log(courses.length);  // 10, trong đó có 3 phần tử thực và 7 phần tử rỗng

// nếu sử dụng for bth để duyệt mảng sẽ ra 7 pty (empty)

for(var i = 0; i < courses.length; i ++) {
    console.log(courses[i]);
    // 3 phần tử thực
    // 7 pty
}

// vì thế nên dùng for in để duyệt

for(var index in courses) {
    console.log(courses[index]);
    // 3 phần tử thực
}
courses.length = 3;
console.log(courses.length);

// Xây dựng phương thức forEach() trong Array

var output = courses.forEach(function(course, index, array) {
//    console.log(course, index, array);
    // course: là value
    // index: là chỉ số trong array
    // array: là mảng truyền vào
});

console.log(output);    // undefine: tức là phương thức forEach() ko có return

// định nghĩa lại forEach: duyệt mảng

Array.prototype.forEach2 = function(callback) {
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}

courses.forEach2(function(course, index, array) {
    console.log(course, index, array);
});

/*
lưu ý: for in ko chỉ duyệt qua mỗi các element mà sẽ duyệt qua cả các elem nằm trong __proto__
    khi định nghĩa 1 phương thức mới (forEach2), khi đó trong proto sẽ có thêm 1 elem là forEach2
    phương thức hasOwnProperty(<something>) : bool kiểm tra xem <something> có nằm trong elem hay ko (tức là ko thuộc proto) 
*/

// Xây dựng phương thức filter: trả về 1 mảng mới chứa tất cả các phần tử thỏa mãn

var menus = [
    {
        name: 'js',
        coin: 600
    },
    {
        name: 'python',
        coin: 800
    },
    {
        name: 'c++',
        coin: 900
    }
];

var filterMenus = menus.filter(function(menu, index, array) {
    return menu.coin > 700;    // điều kiện lọc của filter
});

console.log(filterMenus);      // mảng mới chứa kết quả lọc filter

// định nghĩa lại filter2()

Array.prototype.filter2 = function(callback) {
    var output = [];
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if(result) {
                output.push(this[index]);
            }
        }
    }

    return output;
}

var filter2Menus = menus.filter2(function(menu, index, array) {
    return menu.coin > 800;    
});

console.log(filter2Menus);  

// Xây dựng phương thức some(): bool; có ít nhất 1 phần tử trong mảng thỏa mãn điều kiện

var someResult = menus.some(function(menu, index, array) {
    return menu.coin <= 600;
});

console.log(someResult);    // true ({name: 'js', coin:600})

// định nghĩa lại some2()

Array.prototype.some2 = function(callback) {
    var check = false;
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            check = callback(this[index], index, this);
            if(check) {
                break;
            }
        }
    }
    
    return check;
}

var some2Result = menus.some2(function(menu, index, array) {
    return menu.coin <= 600;
});

console.log(some2Result); 

// Xây dựng phương thức every(): bool; true khi tất cả các phần tử thỏa mãn điều kiện

var everyResult = menus.every(function(menu, index, array) {
    return menu.coin <= 600;
});

console.log(everyResult); 

// định nghĩa lại

Array.prototype.every2 = function(callback) {
    var check = true;
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            check = callback(this[index], index, this);
            if(!check) {
                break;
            }
        }
    }

    return check;
}

var every2Result = menus.every2(function(menu, index, array) {
    return menu.coin <= 600;
});

console.log(every2Result); 










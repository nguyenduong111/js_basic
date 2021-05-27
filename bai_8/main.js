// event listener
// json
// Promise: đồng bộ (sync), bất đồng bộ (async)


// event listener


var btn = document.getElementById('btn');

// dom event
btn.onclick = function(e) {
    console.log('viec 1');

    console.log('viec 2');

    alert('viec 3');
}

// khi click vào btn cả 3 việc trên đều đồng thời xảy ra, event đang đc lắng nghe

// khi không muốn lắng nghe event nữa, ta ghi đè sự kiện

setTimeout(function() {
    btn.onclick = function() {};
}, 3000);

// sau 3s, ko lắng nghe event btn.onclick nữa

// event listener

var btn_2 = document.getElementById('btn_2');

function viec1() {
    console.log('viec 1'); 
}

function viec2() {
    console.log('viec 2'); 
}


btn_2.addEventListener('click', viec1);

// khi muốn thực hiện nhiều việc 1 lúc

btn_2.addEventListener('click', viec2);

btn_2.addEventListener('click', function(e) {
    console.log('viec 3');
});

// muốn hủy lắng nghe

setTimeout(function() {
    btn_2.removeEventListener('click', viec1)
}, 3000);

/*
LƯU Ý:
+ sử dụng dom event khi không có nhu cầu muốn hủy bỏ lắng nghe event
+ sử lý nhiều việc 1 lúc

+ sử dụng event listener khi 1 event nào đó trong trường hợp muốn hủy bỏ lắng nghe
+ muốn bóc tách các event với nhau 
*/


// JSON
/*
+ Một định dạng dữ liệu (chuỗi), ko phải kiểu dữ liệu
+ là Javascript Object Notation
+ dạng dữ liệu: Number, string, boolean, null, array, object


+ 2 thao tác của json
    mã hóa / giải mã
    encode / decode
    stringify: từ js sang json / parse: từ json -> js
*/

// cú pháp JSON

var jsonNumber = '12';   

var jsonBool = 'true';

var jsonString = '"nguyen duong"';

var jsonNull = 'null';

var jsonArray = '["js", "c++", 1]';

var jsonObj = '{"name":"duong", "age":20}';

// json -> js
var myJs = JSON.parse(jsonString);
console.log(myJs);

// js -> json
var str = 'cam nhung';
var myJson = JSON.stringify(str);
console.log(myJson);

// promise

// Sync: đồng bộ, chạy lần lượt theo thứ tự

// Async: bất đồng bộ, chạy ko lần lượt
// các phương thức bất đồng bộ
// setTimeout, setInterval, fetch
// XML HttpRequest, file reading
// request animation frame

// callback để xử lý bất đồng bộ 
// nhược điểm khi xử lý là tạo ra callback hell

//ví dụ về callback hell: callback lồng nhau, các function phụ thuộc vào nhau để chạy
// conslo lần lượt 1 2 3 4 sau mỗi giây

/*
setTimeout(function() {
    console.log(1)
    setTimeout(function() {
        console.log(2)
        setTimeout(function() {
            console.log(3)
            setTimeout(function() {
                console.log(4)
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
*/


//promise: từ es6 sinh ra để giải quyết callback hell
// khởi tạo promise

var promise = new Promise(
    // executor
    function(resolve, reject) {
        // logic
        // resolve() hàm đc gọi khi công việc Promise thành công
        // reject() hàm đc gọi khi Promise ko thành công
        resolve([
            {
                id: 1,
                name: 'js'
            },
            {
                id: 2,
                name: 'c++'
            }
        ]);
        reject('loi');
    }
);

// 3 phương thức trả về của promise

promise
    .then(function(courses) {   // khi xảy ra resolve(), phải có nếu có resolve()
        console.log(courses);
    })
    
    .catch(function(error) {  // khi xảy ra reject(), phải có nếu có reject()
        console.log('loi'); 
    })

    .finally(function() {     // khi kết thúc promise (ko thất thiết phải có)
        console.log('done!');
    });

/*
phương thức hoạt động promise (es6)
    + promise sinh ra để xử lý bất đồng bộ, cụ thể xử lý khi gặp callback hell, giúp dễ hiểu hơn
    + để khởi tạo promise sử dụng từ khóa new Promise nhận tham số là 1 hàm (hàm executor)
    + trong hàm executor nhận 2 tham số dạng hàm
        resolve() khi xử lý logic thành công
        reject() khi xử lý logic không thành công
    + sử dụng promise bằng cách sử dụng 2 thuộc tính
        .then(function(){}); khi xảy ra resolve()
        .catch(function(){}); khi xảy ra reject()
*/

/*
    Đăc biệt promise có tính chất chuỗi
    + 1 resolve() có thẻ có nhiều .then(), các .then() thực hiện lần lượt đồng thời
    + .then() sau nhận đc return từ .then() trước
    + nếu .then() trước ko return, hoặc return ko phải 1 promise các .then() thực hiện lần lượt đồng thời
        promise
            .then(function() {
                return 1;               // ko return ra promise
            })
            .then(function(data) {
                console.log(data);      // 1
                return 2;               // ko return ra promise
            })
            .then(function(data) {
                console.log(data);      // 2
                return 3;               // ko return ra promise
            });
    + nếu .then() trước return ra 1 promise, thực hiện xong promise mới xuống .then() tiếp theo
*/

// giải quyết bài toán callback hell trên theo promise
function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return sleep(1000);
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    });

// Promise luôn resolve()
var proRes = Promise.resolve('123');

proRes
    .then(function() {
        //
    })

// promise luôn reject()
var proRej = Promise.reject('loi');
proRej
    .catch(function() {
        //
    })

// chạy song song các Promise độc lập với nhau

var promise1 = new Promise( function(resolve) {
    setTimeout(function() {
        resolve([1]);
    }, 2000);
});

var promise2 = new Promise( function(resolve) {
    setTimeout(function() {
        resolve([2, 3]);
    }, 3000);
});

// nếu chạy độc lập 2 promise1, promise2 với nhau sẽ mất 5s để hoàn thành cả hai
// chạy song song 2 promise với nhau sẽ mất 3s

Promise.all([promise1, promise2])
    .then(function(res) {    // res sẽ nhận 1 mảng gồm các phần tử là mảng kết quả của promise1 và promise2
        var res1 = res[0];
        var res2 = res[1];
        
        console.log(res1.concat(res2));
    }); 







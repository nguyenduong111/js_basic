
// đệ quy

/*
+ gọi lại 1 hàm trong chính nó
*/


// ví dụ đếm ngược
function countDown(num) {
    if(num < 0) {
        return num;
    }else {
        console.log(num);
        return countDown(num - 1);
    }
}

countDown(5);

// vị dụ duyệt mảng
function loop(start, end, cb) {
    if(start < end) {
        cb(start);
        return loop(start+1, end, cb);
    }else {
        //
    }
}

var arr = [
    'js',
    'c++',
    'python'
];

loop(0, arr.length, function(index) {
    console.log(arr[index]);
});

// tính giai thừa
function gt(number) {
    if(number > 0) {
        return number*gt(number-1);
    }else {
        return 1;
    }
}

var result = gt(5);

console.log(result);


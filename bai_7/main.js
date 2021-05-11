

// DOM events: sự kiện

// có 2 cách để bắt sự kiện
// c1: attribute events: viết thẳng attribute events vào elem 

// click -> onclick="";   bấm chuột vào elem (tạo 1 số ngẫu nhiêu)
//<h1 id="heading" onclick="console.log(Math.random())" >nhung</h1>

/*
lưu ý:
    + trong dom events có định nghĩa "this" là chính elem chứa event
    //<h1 id="heading" onclick="console.log(this)" >nhung</h1>     // trả về chính thẻ h1

    + trường hợp thẻ cha đc thêm event, các thẻ con bên trong cũng sẽ chịu ảnh hưởng tương tự
    // (sự kiện nổi bọt), đôi khi cần ngăn chặt sự kiện nổi bọt
*/

// c2: assign event using the elem node: viết thành hàm ngoài

//var h1Elem = document.getElementById('h1Elem');

// h1Elem.onclick = function() {
//     console.log(Math.random());
// }

/*
+ trong function() định nghĩa 1 callback thường gọi là element (e) để tạo các phương thức bắt event của elem
 nằm trong mouseEvent
*/

var h1Head = document.getElementById('head');

h1Head.onclick = function(e) {
    console.log(e.target);
}

// bắt sự kiện onclick của 3 thẻ h4

/*
var h4Elem = document.querySelectorAll('h4');

for(var i = 0; i < h4Elem.length; i ++) {
    h4Elem[i].onclick = function(e) {
        console.log(e.target);
    }
}

*/

// ví dụ dom events

// 1. input / select

// lấy value của input

var inputElem = document.querySelector('input[type="text"]');

/*
// lấy value khi có sự thay đổi trong input

inputElem.onchange = function(e) {
    console.log(e.target.value);
}
*/


// lấy value trực tiếp trong input (nhập đến đâu lấy đến đó)
inputElem.oninput = function(e) {
    console.log(e.target.value);
}

// checkbox

var inputCheckBox = document.querySelector('input[type="checkbox"]');

inputCheckBox.onchange = function(e) {
    console.log(e.target.checked);      // true or false
}

// select

var selectElem = document.querySelector('select');

selectElem.onchange = function(e) {
    console.log(e.target.value);     // trả về value của option chứ ko phải trả về text
}

// 2. key up/down

var inputKey = document.getElementById('key');

// inputKey.onkeyup = function(e) {
//     console.log(e);
// }

/*
+ onkeyup: nhận khi nhấc phím lên
+ onkeydown: nhận khi nhấm phím xuống
+ onkeypress: nhấn giữ
*/


inputKey.onkeyup = function(e) {
    console.log(e.which);        // trả về giá trị đại diện cho phím đang bấm

    // demo
    switch(e.which) {
        case 65:
            console.log('phim A');   // khi bấm phím a thì in ra 'phim A'
            break;
    }
}



/*
+ có thể lắng nghe sự kiện từ chính document, khi đó sẽ bắt mọi sự kiện trên trình duyệt
+ nếu chỉ bắt sự kiện trên input như trên thì phải forcus vào khung input mới bắt sự kiện đc
+ .wich : trả về mã ascii của phím
+ .key: trả về string tên phím
*/

/*
document.onkeyup = function(e) {
    console.log(e);
    switch(e.key) {
        case 'Escape':
            console.log('exit');
            break;
    }
}
*/

// preventDefault: ngăn chặn hành vi mặc định của trình duyệt đối vs các tag
// ví dụ, hành vi mặc định của tag a là khi kích vào sẽ truy cập đến link trong href=""
/*
    <a href="https://www.facebook.com/">facebook</a>
    <br>
    <a href="https://www.google.com/">google</a>

    bài toán đặt ra là chỉ khi click vào tag a có href="https://www.facebook.com/" thì mới truy cập trang
    còn khác thì sẽ ko có gì xảy ra
*/

var aElem = document.links;     // lấy ra 1 mảng gồm các thẻ a
// var aElem = document.anchors;     // lấy ra thẻ a có attribute name=""
//var aElem = document.querySelectorAll('a');

for(var i = 0; i < aElem.length; i ++) {
    aElem[i].onclick = function(e) {
        if(!e.target.href.startsWith('https://www.facebook.com/')) {
            e.preventDefault();
        }
    }
}

/*
String.startWith('<check_string>') là thuộc tính mới của string,
 cho phép kiểm tra xem 1 chuỗi đang xét có bắt đầu bằng chuỗi check_string ko 
*/


//vd 2: forcus vào input, hiện ra 1 list <li>, clicl vào <li> trả về console <li> đó

var ulElem = document.querySelector('ul');

ulElem.onmousedown = function(e) {
    e.preventDefault();
}

ulElem.onclick = function(e) {
    console.log(e.target);
}

// stopPropagation: ngăn hành vi nổi bọt, (hành vi bắt sự kiện sẽ xảy ra từ khối trong và nổi ra khối ngoài)
// ví dụ: xét khối cha div, con button 
// bắt sự kiện của button nhưng ko bắt sự kiện của div

var divEvent = document.querySelector('div');

divEvent.onclick = function(e) {
    console.log('div');
}

var butEvent = document.querySelector('button');

butEvent.onclick = function(e) {
    console.log('click!!!');
    e.stopPropagation();      // ngăn sự kiện nổi bọt
}
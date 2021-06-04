
// const date = new Date();


var input = 10000;

// function exist(number, arr, start, end) {
//     let middle = parseInt((start + end) / 2);

//     if (end - start < 3)
//       return (
//         number === arr[start] || number === arr[middle] || number === arr[end]
//       );

//     if (number === arr[middle]) return true;

//     if (number > arr[middle]) return exist(number, arr, middle, end);
//     else return exist(number, arr, start, middle);
//   }

function Blum(input) {
    var arrBlum = [];
    var arrSNT = [];
    var arrPair = [];
    var count = 0;

    // sàng Eratosthenes tìm số nguyên tố  (2 * snt < input để rút ngắn bớt)
    var arrInput = [];
    for(var i = 2; i < input; i ++) {
        arrInput[i] = 0;
    }

    for(var i = 2; i < input; i++) {
        if(arrInput[i] == 0 && (i * 2) < input) {
            arrInput[i] = 2;
            for (var j = 2 * i; j < input; j += i) {
                arrInput[j] = 1;
            }
        } else if((i * 2) >= input){
            break;
        }
    }
    
    for(var i = 2; i < input; i++) {
        if(arrInput[i] == 2) {
            arrSNT.push(i);
        } else if(arrInput[i] == 0) {
            break;
        }
    }

    
    var sizeSNT = arrSNT.length;
    for(var i = 0; i < sizeSNT; i ++) {
        for(var j = i + 1; j < sizeSNT; j ++) {
            var temp = arrSNT[i]*arrSNT[j];
            if( temp < input) {
                arrBlum.push(temp);
            }
        }
    }

    arrBlum.sort((a, b) => a - b);
    var sizeBlum = arrBlum.length;
    for(var i = 0; i < sizeBlum; i ++) {
        for(var j = i + 1; j < sizeBlum; j ++) {
            var temp = arrBlum[i] + arrBlum[j];
            // if(arrBlum.includes(temp)) {
            //     arrPair.push(temp);
            // }
            if(arrBlum.some(x => x == temp)) {
            //   if(exist(arrBlum[i] + arrBlum[j], arrBlum, j+1, arrBlum.length)) {
            //     ++count;
                arrPair.push(temp);
            }
        }
    }
    console.log('----------');
    console.log(arrSNT.length);
    console.log(arrBlum.length);
    console.log(arrPair.length);
    // console.log(count);

    
} 

var start = performance.now();

Blum(input);


// console.log(`${new Date()-date} ms`);
var end = performance.now();
console.log(`${end - start} ms`);
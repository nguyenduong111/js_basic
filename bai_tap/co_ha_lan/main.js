
function swap(arr, x1, x2) {
    let t = arr[x1];
    arr[x1] = arr[x2];
    arr[x2] = t;
}

function convert(arr) {
    let out = [];
    for(let i of arr) {
        switch(i) {
            case 'd':
                out.push(0);
                break;
            case 't':
                out.push(1);
                break;
            case 'x':
                out.push(2);
                break;
            case 0:
                out.push('d');
                break;
            case 1:
                out.push('t');
                break;
            case 2:
                out.push('x');
                break;        
        }
    }
    return out;
}

// xay dung quick sort
function partition (arr, low, high) {
    let p = arr[high];
    let l = low;
    let r = high - 1;

    while(1) {
        while(l <= r && arr[l] < p) l++;
        while(r >= l && arr[r] > p) r--;
        if(l >= r) break;
        swap(arr, l, r);
        l++;
        r--;
    }
    swap(arr, l, high);
    return l;
}

function quickSort(arr, low, hight) {
    if(low < hight) {
        var pi = partition(arr, low, hight);

        quickSort(arr, low, pi-1);
        quickSort(arr, pi+1, hight);
    }

}

// mregeArr
function mregeArr(arr1, arr2) {
    var out = [];
    var i = 0;
    var j = 0;
    var size1 = arr1.length;
    var size2 = arr2.length;

    while(i < size1 && j < size2) {
        if(arr1[i] <= arr2[j]) {
            out.push(arr1[i]);
            i++;
        } else {
            out.push(arr2[j]);
            j++;
        }
    }

    while(i < size1) {
        out.push(arr1[i]);
        i++;
    }

    while(j < size2) {
        out.push(arr2[j]);
        j++;
    }

    return out;
}

//input
var arr1 = ['t','t','d','d','d','x','x','d','x','t','x','d','t'];
var arr2 = ['d','d','x','t','d','x'];

var newArr1 = convert(arr1);
var newArr2 = convert(arr2);

quickSort(newArr1, 0, newArr1.length-1);
quickSort(newArr2, 0, newArr2.length-1);

arr1 = convert(newArr1);
arr2 = convert(newArr2);

console.log(arr1);
console.log(arr2);

var output = convert(mregeArr(newArr1, newArr2));

console.log(output);


var months = ["January", "February", "March", "April"];
var newMontsh;
var newMontsh1;

function getMonthNameNumber(months) {
    return months.map((m, i) => `${m} - ${i + 1}`)
}

function getMonthNameNumbers(months) {
    let arr = [];
    for (var i = 0; i < months.length; i++) {
        arr.push(`${months[i]} - ${i + 1}`);
    }
    return arr;
}

newMontsh = getMonthNameNumber(months);
newMontsh1 = getMonthNameNumbers(months);
console.log(newMontsh);
console.log(newMontsh1);

//bubble sort
var arr = [5, 3, 8, 4, 1, 2];
function bubbleSort(arr) {
    var len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


console.log(bubbleSort(arr));
var arr1 = [5, 3, 8, 4, 1, 2];

function bubbleSort1(arr) {
    var swaping;
    do {
        swaping = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swaping = true;
            }
        }
    } while (swaping);
    return arr;
}

console.log(bubbleSort1(arr1));

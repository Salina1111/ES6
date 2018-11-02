//Reverse string and Palindrome
function reverseString(str) {
    var a = [...str]//use of spread to insert the given string into an array
    for (let i = str.length - 1, j = 0; i >= 0; i--, j++)
    a[j] = str[i];
    b = a.join('');
    
    if(b===str ){
        alert(str+" " +"is palindrome");
        
    }else{
        alert(str+" "+"is not palindrome");
    }
    return b;
}
console.log(reverseString('eye'));

//Integer reversal
function Int(num) {
    let r = num.toString().split('').reverse().join('')
    return r;
}

console.log(Int(12345));

//Capitalize each first word
function UpperCase(str) {
    const strArr = str.toLowerCase().split(' ');
    
    for(let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    }
    
    return strArr.join(' ');
}
console.log(UpperCase('say hello'));


//maximum character

function maxCharacter(str) {
    const a = {};
    let maxNum = 0;
    let maxChar = '';
    
    str.split('').forEach((c) => {
        if (a[c]) {
            a[c]++; // This will add 1
        } else { // If no letter has been found yet
            a[c] = 1;
        }
    });

    for (let c in a) {
        if (a[c] > maxNum) {
            maxNum = a[c];
            maxChar = c;
        }
    }
    return (maxChar+" = "+maxNum);
}

const output = maxCharacter('papaya');

console.log(output);

//Chunk Array
function chunkArray(myArray, chunk_size){
    var results = [];
    console.log()
    while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
    }
    
    return results;
}

//FizzBuzz
for (var i=1; i <= 100; i++){
    (i % 3 == 0)?console.log("Fizz"):(i % 5 == 0)?console.log("Buzz"):console.log(i);
    
}

//To convert a specified number to an array of digits

function array(s){
    let d = s.toString();
    let a = [...d];//use of spread operator
    return a;
}

console.log(array(12345));
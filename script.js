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

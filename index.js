//get input
const input = document.querySelector("#inputId");
const submitBtn = document.querySelector("#submit");
const messageDiv = document.querySelector(".message");

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const word = input.value;
    let message = palindromeChecker(word);
    messageDiv.innerText = message;
    
})


function palindromeChecker(word) {
    let arr = word.split("");
    let reversedArr = arr.slice().reverse();

    let isPadindrome = true;

    //compare letters from both arrays
    for (let i = 0; i < arr.length; i++){
     
        if(arr[i] !== reversedArr[i]) {
            //if any letter pair does not match isPadindrome is false
            isPadindrome = false;
        }
    }

    if (isPadindrome) {
        return "Word is a palindrome.";
    }else {
        return "Word is not a palindrome.";
    }
    
}


/*console.log(palindromeChecker("kayak"));
console.log(palindromeChecker("civic"));
console.log(palindromeChecker("radar"));
console.log(palindromeChecker("country"));
console.log(palindromeChecker("car"));
console.log(palindromeChecker("food"));*/
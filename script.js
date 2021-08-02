let submitBtn = document.getElementById("submit_btn");

let birthDate = document.getElementById("birthdate");

let dateConvToNumber = 0;

let reverseNumber = 0;

let output = document.getElementById("output");

// Palindrome function
function isPalindrome(format){

    let formatCopy = format;

    for(let i = 0; i < format.length; i++){

        let digit = formatCopy % 10;

        reverseNumber = (reverseNumber * 10) + digit;

        formatCopy = Math.floor(formatCopy / 10);
    }
    

    if(format == reverseNumber){
        return true;
    }
    else{
        reverseNumber = 0;
        return false;
    }

}


// To check different date formats
function combinations(year, month, date){

    // yyyy-mm-dd
    const format1 = year + month + date;

    // dd-mm-yyyy
    const format2 = date + month + year;

    // mm-dd-yy
    const format3 = month + date + year.substring(2,4);

    // m-dd-yyyy
    const format4 = Number(month) + date + year;


    if(isPalindrome(format1)){
        return (`${year}-${month}-${date}`);
    }
    else if(isPalindrome(format2)){
        return (`${date}-${month}-${year}`);
    }
    else if(isPalindrome(format3)){
        return (`${month}-${date}-${year.substring(2,4)}`)
    }
    else if(isPalindrome(format4)){
        return (`${Number(month)}-${date}-${year}`)
    }
    else{
        return null;
    }
}


submitBtn.addEventListener("click", function(event){

    event.preventDefault();

    let bdate = birthDate.value;
    const dateArr = bdate.split("-");
    console.log(dateArr);

    let year = dateArr[0];
    let month = dateArr[1];
    let date = dateArr[2];

    let flag = combinations(year, month, date);
    console.log("Flag: "+ flag);

    if(flag){
        output.style.border = "2px solid black";

        output.innerHTML = `Hurray, your birthdate in format ${flag} is palindrome`;
    }
    else{
        output.style.border = "2px solid black";
        output.innerHTML = `Aww!! Your birthdate is not a palindrome`;
    }

});


let submitBtn = document.getElementById("submit_btn");

let birthDate = document.getElementById("birthdate");

let dateConvToNumber = 0;

let reverseNumber = 0;

let output = document.getElementById("output");


function combinations(year, month, date){

    // yyyy-mm-dd
    const format1 = year + month + date;

    // dd-mm-yyyy
    const format2 = date + month + year;

    // mm-dd-yy
    const format3 = month + date + year.substring(2,4);

    // m-dd-yyyy
    const format4 = Number(month) + date + year;
}


function isPalindrome(format){

    let formatCopy = format;

    for(let i = 0; i < format.length; i++){

        let digit = formatCopy % 10;

        reverseNumber = (reverseNumber * 10) + digit;

        formatCopy = Math.floor(formatCopy / 10);
    }
    console.log(reverseNumber);

    if(format == reverseNumber){
        output.innerHTML = "Hurray it is a palindrome!!!!";
    }
    else{
        output.innerHTML ="It is not a palindrome";
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


   
    console.log(format1);

    isPalindrome(format1);


});


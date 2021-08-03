let submitBtn = document.getElementById("submit_btn");

let birthDate = document.getElementById("birthdate");

let reverseNumber = 0;

let output = document.getElementById("output");

const datesInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


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


// Function to check nearest palindrome
function nextPalindrome(year, month, date){
    let date1 = Number(date);
    let month1 = Number(month);
    let year1 = Number(year);

    let date2 = Number(date);
    let month2 = Number(month);
    let year2 = Number(year);


    // Forward Check
    for(let i = 1; i > 0; i++){
        date1 = date1 + 1;
       
        if(date1 > Number(datesInMonth[month1 - 1])){
            date1 = 1;
            month1 = month1 + 1;          //Next Month
            if(month1 > 12){
                month1 = 1;             
                year1 = year1 + 1;      //Next Year
            }
        }
       
        let yyString = year1.toString();
        let mmString = month1.toString();
        let ddString = date1.toString();

        if(mmString.length == 1){
            mmString = "0" + mmString;
        }

        if(ddString.length == 1){
            ddString = "0" + ddString;
        }

        
        let forwardCheck = combinations(yyString, mmString, ddString);
        
        if(forwardCheck){
            console.log(forwardCheck);
            console.log(i);
            return [`${forwardCheck}` , i];
        }
        }


        // Backward Check

        if(year2 > 1){
            date2 = date2 - 1;
            if(date2 < 1){
                month2 = month2 - 1;        //Previous Month
                if(month2 < 1){
                    month2 = 12;
                    year2 = year2 - 1;      //Previous Year
                    if(year2 < 1){
                        return;
                    }
                    date2 = datesInMonth[month2 - 1];
                }
            }

            let yyString = year2.toString();
            let mmString = month2.toString();
            let ddString = date2.toString();

            if(mmString.length == 1){
                mmString = "0" + mmString;
            }

            if(ddString.length == 1){
                ddString = "0" + ddString;
            }
        }

        let backwardCheck = combinations(yyString, mmString, ddString);

        if(backwardCheck){
            return [`${backwardCheck}`, i];
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
        
        let [flag_1, diff] = nextPalindrome(year, month, date);
        
        output.style.border = "2px solid black";


        output.innerHTML += `Aww!! Your birthdate is not a palindrome. The nearest palindrome is ${flag_1}. You missed it by ${diff} days`;
    }

});


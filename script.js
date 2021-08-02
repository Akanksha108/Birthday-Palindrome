let submitBtn = document.getElementById("submit_btn");

let birthDate = document.getElementById("birthdate");

let dateConvToNumber = 0;

let reverseNumber = 0;

let output = document.getElementById("output");

submitBtn.addEventListener("click", function(event){

    event.preventDefault();

    let bdate = birthDate.value;
    const dateArr = bdate.split("-");
    console.log(dateArr);

    let year = dateArr[0];
    let month = dateArr[1];
    let day = dateArr[2];


    // Format : 1995-08-01
    for(let i = 0; i < bdate.length; i++){

         let num = parseInt(bdate.charAt(i));

         if(!isNaN(num)){
             let currentDigit = num % 10;

             dateConvToNumber = (dateConvToNumber * 10) + currentDigit; 
         }
    }

    let dateConvToNumberCopy1 = dateConvToNumber;

    for(let i = 0; i < bdate.length - 2; i++){

        let digit = dateConvToNumberCopy1 % 10;

        reverseNumber = (reverseNumber * 10) + digit;

        dateConvToNumberCopy1 = Math.floor(dateConvToNumberCopy1 / 10);
    }


    if(dateConvToNumber == reverseNumber){
        output.innerHTML = "Hurray it is a palindrome!!!!";
    }
    else{
        output.innerHTML ="It is not a palindrome";
    }

});


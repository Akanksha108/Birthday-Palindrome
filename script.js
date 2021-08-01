let submitBtn = document.getElementById("submit_btn");

let birthDate = document.getElementById("birthdate");

let dateConvToNumber = 0;

let reverseNumber = 0;

let output = document.getElementById("output");

submitBtn.addEventListener("click", function(event){

    event.preventDefault();
    let bdate = birthDate.value;
    console.log(`bday: ${bdate}`);


    for(let i = 0; i < bdate.length; i++){

         let num = parseInt(bdate.charAt(i));
         console.log("num: " + num);

         if(!isNaN(num)){
             let currentDigit = num % 10;

             console.log(`CurrDig: ${currentDigit}`);

             dateConvToNumber = (dateConvToNumber * 10) + currentDigit;
             console.log(`Date Converted To Number:  ${dateConvToNumber}`);  
         }
    }

    let dateConvToNumberCopy = dateConvToNumber;

    for(let i = 0; i < bdate.length - 2; i++){

        let digit = dateConvToNumberCopy % 10;
        console.log(`Digit of 2nd for loop: ${digit}`);

        reverseNumber = (reverseNumber * 10) + digit;
        console.log("Rev No: "+ reverseNumber);

        dateConvToNumberCopy = Math.floor(dateConvToNumberCopy / 10);

        console.log(`DateToNum:  ${dateConvToNumberCopy}`);

    }

    if(dateConvToNumber == reverseNumber){
        output.innerHTML = "Hurray it is a palindrome!!!!";
    }
    else{
        output.innerHTML ="It is not a palindrome";
    }

});


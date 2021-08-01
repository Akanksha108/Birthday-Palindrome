let submitBtn = document.getElementById("submit_btn");

let birthDate = document.getElementById("birthdate");

let dateConvToNumber = 0;

let reverseNumber = 0;

submitBtn.addEventListener("click", function(event){

    event.preventDefault();
    let bdate = birthDate.value;
    // console.log(date);

    let bdateCopy = bdate;
    console.log(bdateCopy);

    for(let i = 0; i < bdateCopy.length; i++){

         let num = parseInt(bdateCopy.charAt(i));
         console.log("num: " + num);

         if(!isNaN(num)){
             let currentDigit = num % 10;

             console.log(`CurrDig: ${currentDigit}`);

             dateConvToNumber = (dateConvToNumber * 10) + currentDigit;
             console.log(`Date Converted To Number:  ${dateConvToNumber}`);  
         }
    }

    for(let i = 0; i < bdateCopy.length - 2; i++){

        let digit = dateConvToNumber % 10;
        console.log(`Digit of 2nd for loop: ${digit}`);

        reverseNumber = (reverseNumber * 10) + digit;
        console.log("Rev No: "+ reverseNumber);

        dateConvToNumber = Math.floor(dateConvToNumber / 10);
        console.log(`DateToNum:  ${dateConvToNumber}`);

    }

});


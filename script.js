let submitBtn = document.getElementById("submit_btn");

let birthDate = document.getElementById("birthdate");

console.log(birthdate);


submitBtn.addEventListener("click", function(event){

    event.preventDefault();
    let date = birthDate.value;
    console.log(date);
});
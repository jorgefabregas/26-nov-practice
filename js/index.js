let button = document.getElementById ("#calWeigthBut");

button.addEventListener("click", function() {
    let userName = document.getElementById ("name").value;
    let weightKg = parseFloat(document.getElementById ("weight").value);

    let result = weightKg * 2.2;

    alert (`${userName} Your weigth in lbs is ${result.toFixed (2)}`);
})

let btn = document.getElementById (but);

btn.addEventListener ("click", function (){

    if (num > 0) {
        alert = ("Your number is positive");
    }

})
    



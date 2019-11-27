let butnumber = document.getElementById ("numbut");

butnumber.addEventListener ("click", function (){

    let num = document.getElementById ("num").value
    
    if (num > 0) {
        alert (`Your number is positive`)
    }
})
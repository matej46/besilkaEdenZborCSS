var vnesiBtn=document.getElementById("VnesiBtn")
    var odnovoBtn=document.getElementById("odnovoBtn")
    odnovoBtn.style.visibility="hidden"
    var word="hamburger"
    var attempts=5
    var counter=0
var slika=1
    for (i=0; i<=word.length; i++) {
    document.getElementsByClassName("bukva")[i].style.visibility="hidden";
}



    function check() {

    var attemptsP=document.getElementById("attempts")

    var result=document.getElementById("result")

    var text=document.getElementById("text")
    var letter=document.getElementById("text").value.toLowerCase()
    if (letter.length>1) {
    alert("Vnesi tocno edna bukva")
    text.value=""
}
    else {
        var wordArr = word.split("")


        if (wordArr.includes(letter)) {
            counter++;
            result.innerHTML = "Pogodivte bukva"
            text.value = ""
            for (i = 0; i <= word.length; i++) {
                document.getElementsByClassName(letter)[i].style.visibility = "visible"
            }
            if (counter == 8) {
                alert("pogoden zbor")
                vnesiBtn.style.visibility = "hidden"
                odnovoBtn.style.visibility = "visible"
            }

        } else {
            var div=document.getElementById("div2")
            result.innerHTML = "Ne pogodivte bukva"
            attempts--
            attemptsP.innerHTML = "Obidi ostanati:" + attempts
            text.value = ""
            slika++
            debugger;
            div.innerHTML = "<img src=sliki/slika" + slika + ".png height='600px' width='500px'>"
            console.log(slika)
            if (attempts == 0) {
                alert("Izgubivte")
                vnesiBtn.style.visibility = "hidden"
                odnovoBtn.style.visibility = "visible"


            }
        }
    }

}
    function odnovo() {
    document.location.reload()
}

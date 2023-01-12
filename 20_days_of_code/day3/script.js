function palindrome() {
    var inputstr = document.getElementById("input").value;
    var reg = /[W_]/G;
    var lcase = inputstr.toLowerCase().replace(Reg, "");
    var reversed = lcase.split("").reverse().join("");

    if(reversed == lcase){
        document.getElementById("result").innerHTML = "Given String is a Palindrome";
    }
    else{
        document.getElementById("result").innerHTML = "Given String is not a Palindrome";
    }
}
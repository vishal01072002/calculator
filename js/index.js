
// make array of all keys and add eventlistner of click and keypress
var keyArr = document.querySelectorAll(".keys");
length = keyArr.length;
for (var i = 0; i < length; i++) {
    keyArr[i].addEventListener("click", handleClick);
}


var expression = "";
var ans = "";
function handleClick() {
    ans = document.querySelector("input").value;
    expression = ans;
    var key = this.innerHTML;
    console.log(key);
    if (key != "Del" && key != "=" && key != "AC") {
        
        expression += key;
        // put expression in input tag
        document.querySelector('input').value = expression;
        //console.log(ans);
        
    }
    
    else if (key == "Del") {
        //sclice
        document.querySelector("input").style.color="white";
        var len = expression.length;
        expression = expression.slice(0, len - 1);
        document.querySelector("input").value = expression;
    }

    else if (key == "=") {
        var evaluated = "";
        document.querySelector("input").style.color="white";
        // console.log(expression);
        // console.log(eval(expression));
        try {
            evaluated = eval(expression);
            document.querySelector("input").value =+ evaluated; 
            expression = "";
        } catch (error) {
            document.querySelector("input").value = "ERROR !";
            document.querySelector("input").style.color="red";
        }

        // var postfix = infixToPostfix(expression);
        // console.log(postfix);
        // return answer
    }
    else if (key == "AC") {
        expression = "";
        document.querySelector("input").value = expression;
        document.querySelector("input").style.color="white";
    }
}
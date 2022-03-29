//Javascript//

function DeleteMe(){
    document.getElementById('calc').value =""
}
function calculator(newValue){
    document.getElementById("calc").value += newValue;
}
function answer(){
    var jubair = document.getElementById('calc').value;
    var jishan = eval(jubair);
    document.getElementById('calc').value = jishan;
}

function Delete(){
   document.getElementById('calc').value.slice(1, -1);
}
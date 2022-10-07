var displayinput = document.getElementById("display");
function takebuttonvalue(btnValue){
    displayinput.value += btnValue;
}
function calculate(){
    var a = displayinput.value;
    var ans = eval(a);
    displayinput.value = ans;
}
function clearall(){
    displayinput.value = "";
}
function dele(){
    var b = displayinput.value.slice(0,-1);
    displayinput.value =  b
}
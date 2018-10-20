function checkAnswer(id, buttonCheck){
    var btn = document.getElementById(id);
    var check = document.getElementById("checkbox_" + id);
    btn.classList.toggle("multi-choice-answer-active");
    if(buttonCheck)
        check.checked = !check.checked;
    btn.innerHTML = check.checked;
}

// Thay đổi vị trí dấu gạch ngang trên thanh chọn loại đề bài
function display_dash(id, id2){
    var dash_listening = document.getElementById("dash_listening");
    var dash_speaking = document.getElementById("dash_speaking");
    var dash_reading = document.getElementById("dash_reading");
    var dash_writing = document.getElementById("dash_writing");

    dash_listening.style.opacity = 0;
    dash_reading.style.opacity = 0;
    dash_writing.style.opacity = 0;
    dash_speaking.style.opacity = 0;

    var listening = document.getElementById("listening");
    var speaking = document.getElementById("speaking");
    var reading = document.getElementById("reading");
    var writing = document.getElementById("writing");

    listening.style.color = "Gainsboro";
    speaking.style.color = "Gainsboro";
    reading.style.color = "Gainsboro";
    writing.style.color = "Gainsboro";

    var dash = document.getElementById(id);
    var text = document.getElementById(id2);
    dash.style.opacity = 1;
    text.style.color = "white";
}

// Chỉnh size chữ khi click vào icon
var isBigSize = false;
function changeTextSize(){
    var resizables = document.getElementsByClassName("text-resizable");
    for(var i = 0; i<resizables.length; i++)
    {
        var style = window.getComputedStyle(resizables[i], null).getPropertyValue("font-size");
        var fontSize = parseFloat(style);
        /*
        if(resizables[i].style["font-size"] != "25px")
            resizables[i].style["font-size"] = "25px";
        else
            resizables[i].style["font-size"] = "35px";
            */
        if(isBigSize){
            resizables[i].style.fontSize = (fontSize - 10) + "px";
        }
        else{
            resizables[i].style.fontSize = (fontSize + 10) + "px";
        }   
    }
    isBigSize = !isBigSize;
}

// Mở answer review và lấy đáp án
function openAnswerReview(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            loadAnswerReview(this);
        }
    };

    xmlhttp.open("GET", "answer-review.xml", true);
    xmlhttp.send();

    var answerReview             = document.getElementById("answer-review-panel");
    var answer                   = document.getElementById("answer-review");
    var confirmExit              = document.getElementById("confirm-exit");
    answerReview.style.display   = "block";
    answer.style.display         = "block";
    confirmExit.style.display    = "none";

}

// Mở confirm exit test
function openConfirmExitTest(){
    var answerReview             = document.getElementById("answer-review-panel");
    var answer                   = document.getElementById("answer-review");
    var confirmExit              = document.getElementById("confirm-exit");
    answerReview.style.display   = "block";
    answer.style.display         = "none";
    confirmExit.style.display    = "block";
}

// Đóng answer review + confirm exit test
function closeAnswerReview(){
    var answerReview = document.getElementById("answer-review-panel");
    answerReview.style.display = "none";
}


// Load các đáp án người dùng đã chọn lên UI
function loadAnswerReview(xml){
    var i, text= '', numberOfQuestions = 0;
    var xmlDoc = xml.responseXML;
    var answer = xmlDoc.getElementsByTagName("ANSWER");
    numberOfQuestions = Math.round(answer.length / 2);

    text += '<table>';
    text += '<tr>' +
                ' <th>Your answers</th> ' +
                ' <th style="width: 5px; background: #fff"></th>' +
                ' <th>Your answers</th> ' +
            ' </tr> ';
    for(i = 0; i<numberOfQuestions;i++)
    {
        text += '<tr>';
        text += '<td>';
        text += '<div class="question-number-answer"><span>' + (i + 1) + '</span></div>';
        text += '<span>' + answer[i].childNodes[0].nodeValue + '</span>'
        text += '</td>';  
        text += ' <td style="width: 5px; background: #fff"></td>';
        if(numberOfQuestions + i < answer.length)
        {
            text += '<td>';
            text += '<div class="question-number-answer"><span>' + (numberOfQuestions + i + 1) + '</span></div>';
            text += '<span>' + answer[numberOfQuestions + i].childNodes[0].nodeValue + '</span>'
            text += '</td>'; 
        }
        text += "</tr>";
    }
    text += "</table>";
    document.getElementById("table-answer").innerHTML = text;
}
$(document).ready(function() {

    // Highlight Part
    var selectionIcon;
    $('.mikey').mouseup(function(e) {
        var sel = window.getSelection();
        length_of_sel = Math.abs(sel.anchorOffset - sel.focusOffset);
        if (!selectionIcon) {
            selectionIcon = $('<button>').attr({
                type: 'button',
                id: 'quote-place',
                class: 'btn'
            })
            .html('<i class="fas fa-pencil-alt"></i>')
            .css({
                "color": "red",
                "background": "none",
                "border": "none"
            });

            $(document.body).append(selectionIcon);
            selectionIcon.hide();
        }
        else if ((selectionIcon) && (length_of_sel == 0)) { // khi icon đang hiển thị nhưng tôi muốn nó không hiển thị nữa
        	selectionIcon.fadeOut("slow");
        }
        if (length_of_sel != 0){
            selectionIcon.css({
                top: e.pageY - 30, 
                left: e.pageX - 13 
            }).fadeIn(500); 
        }
        var click = 0;
        $("#quote-place").click(function quote() { // khi click button
            $('.mikey').off('mouseup');
            click++;
            if (sel.rangeCount && sel.getRangeAt) {
                range = sel.getRangeAt(0);
            }
            // console.log('this is focusSNode ' + sel.focusNode.parentNode.classlist);

            document.designMode = "on";
            document.execCommand("hilitecolor", false, "yellow");
            document.designMode = 'off';

            // document.execCommand('formatblock', false, 'span')
            // $(sel.focusNode).parent().removeClass().addClass('click' + click)

            // console.log(click)
            // console.log('this is focusSNode ' + $(sel.focusNode).parent().attr('class'));
            if (selectionIcon) {
                selectionIcon.fadeOut("slow");
                $('.mikey').on('mouseup');
            }

        });
    });
});

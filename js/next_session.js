

$(document).ready(function(){
        //next session button
        $('#clickme').click(function(e){
            e.preventDefault();
            var link = $(this).attr('href');
            swal({
                position: 'top',
                title: 'Are you sure?',
                text: "If you go to the next session, you won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                cancelButtonColor: '#d33',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Yes, go to next session!'
            }).then((result) => {
              if (result.value) {
                window.location.href = link;
            }
        })
        });

    });
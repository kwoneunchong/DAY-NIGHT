
$(function(){
    $(".btn01").click(function(){ 
        var people = $('#people').val();
        var phone = $('#phone').val();
        var chk = false;


        $("input:checkbox[name=reservation_chk]").each(function() {
            if($(this).is(":checked") == true){
                console.log('체크된 상태');
                chk = true;
            }
        });


        if(people && phone && chk) {
            alert("예약이 완료되었습니다.");
            location.href = 'reservation.html';
        } else {
            alert("예약정보 입력을 확인해주세요!")
        }
    });
});


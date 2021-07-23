
$(function(){
    $(".btn01").click(function(){ 

        var phone = $('#phone').val();

        if(phone) {
            alert("예약정보: 인원은 총 2명이며 파리의 오전 컨셉을 예약하셨습니다.");
            location.href = 'lookup.html';
        } else {
            alert("전화번호 입력을 확인해주세요!")
        }

    });
});
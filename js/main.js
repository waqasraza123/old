function setSuccessImage(){
    var width = $(window).width();
    console.log(width);
    if(width < 768){
        $('img.success').attr('src','images/mobile-success.png');
    } else {
        $('img.success').attr('src','images/join-confirm-button.png');
    }
}
$('#mc-form').ajaxChimp({
    url: 'https://hello-demo.us17.list-manage.com/subscribe/post?u=20a1d645a6bb5ca37e91ea176&amp;id=ba1a9de010', //Set Your Mailchamp URL
    callback: function (resp) {
        if (resp.result === 'success') {
            $('button[type="submit"]').slideUp();
            $('div.success-container').slideDown();
        } else {
        	var message = resp.msg.split('-');
            if(message.length == 2){
                var message_string = message[1].trim();
                $('#genericToastText').html(message_string);
            } else {
                $('#genericToastText').html(resp.msg);
            }
            $('.generic-toast').fadeIn(400).delay(2000).fadeOut(400);
        }
    }
});
$(window).ready(function(){
    setSuccessImage();
    $(window).on('resize',function(){
        setSuccessImage();
    });
});
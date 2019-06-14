$(function () {
    new WOW().init();
    $("#fix-add .gotop").click(function () {
        $('html,body').stop(true, false).animate({scrollTop: '0px'}, 800);
    });
    $(".banner .showSubmitForm").click(function () {
        $(".banner .form-box").show();
    });
    $(".banner .form-close").click(function () {
        $(".banner .form-box").hide();
    });
    show_center_fixed(11000);
    $(".center_fixed_close").click(function () {
        $(".center_fixed").hide();
        show_center_fixed(18000);
    });
});
function show_center_fixed(time) {
    setTimeout(function () {
        $(".center_fixed").show();
    }, time);
}
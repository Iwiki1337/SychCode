function windowSize(){
    if ($(window).width() < '768'){
        $(".arrowsSmall").show(10);
        $("#myBtn").hide(10);
        $("#myBtn1").hide(10);
//        $(".containerContacts").hide();
        console.log("<768");
    } else {
        $(".arrowsSmall").hide(10);
        $("#myBtn").show(10);
        $("#myBtn1").show(10);
        $(".containerContacts").show();
    }
}
function windowSizeBig(){
    if ($(window).width() < '1080'){
        $(".blockSideLeft").hide(10);
        $(".blockSideRight").hide(10);
    } else {
        $(".blockSideLeft").show(10);
        $(".blockSideRight").show(10);
    }
}
//$(window).load(windowSize);
$(window).on('load resize',windowSize);
$(window).on('load resize',windowSizeBig);
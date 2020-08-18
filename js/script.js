
$(document).ready(function() {
    var $sub = $('.sub_wrap');
    var $lnb = $sub.find('.lnb');
    var $tab = $sub.find('.cnt_wrap .cnt_top .tab');

    $lnb.find('.schedule .day .trip_date').on('click', function() {
        $(this).next().stop().slideToggle().parent('.day').toggleClass('on');
    })

    $tab.find('.tab_tit a').on('click', function() {
        var tabNum = $(this).parent().index();
        
        $(this).parent().addClass('on').siblings().removeClass('on');
        $sub.find('.cnt_wrap .cnt > .tab_cnt').eq(tabNum).addClass('show').siblings().removeClass('show');
    })
});
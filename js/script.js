'use strict';

const scheduleDay = document.querySelectorAll('.schedule .day');
const tabTitle = document.querySelectorAll('.cnt_top .tab .tab_tit');
const tabCnt = document.querySelectorAll('.cnt .tab_cnt');

/* sub - lnb - schedule */
function clickDateHandler(e) {
  //console.log(e.currentTarget, parent);
  let parent = e.currentTarget.parentNode;
  if (parent.classList.contains('on')) {
    parent.classList.remove('on');
  } else {
    parent.classList.add('on');
  }
}

for (let i = 0; i < scheduleDay.length; i++) {
  scheduleDay[i]
    .querySelector('.trip_date')
    .addEventListener('click', clickDateHandler);
}

/* sub - cnt_sub - cnt_top - tab */
function clickTabHandler(e) {
  //console.log(e.currentTarget, parent);
  let parent = e.currentTarget.parentNode;
  let parentNum;

  for (let i = 0; i < tabTitle.length; i++) {
    tabTitle[i].className = tabTitle[i].className.replace(' on', '');
  }
  for (let i = 0; i < tabCnt.length; i++) {
    tabCnt[i].className = tabCnt[i].className.replace(' show', '');
  }
  parent.classList.add('on');

  for (let i = 0; i < tabTitle.length; i++) {
    if (tabTitle[i].classList.contains('on')) {
      parentNum = i;
    }
  }

  tabCnt[parentNum].classList.add('show');
}
for (let i = 0; i < tabTitle.length; i++) {
  tabTitle[i].querySelector('a').addEventListener('click', clickTabHandler);
}

/* jQuery
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
}); */

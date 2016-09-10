
$(function(){
  mentoringBubbleClick();
});

function mentoringBubbleClick() {
  // click face -
  // get distance of face from its parent
  // move whole container up 115px + count
  // add .is-open class to face
  $('.face').on('click', function(){

    var $this = $(this),
        faceTop = $(this).position().top,
        vertMath = -(faceTop - 230),
        faceLeft = $(this).position().left,
        horizMath = 0 - faceLeft;


    if($(window).width() > 640) {
      $this.parent().css('top', vertMath + 'px' )
      $(this).addClass('has-bubble-open')
        .siblings().removeClass('has-bubble-open')
    }
    else {
      if($this.hasClass('back-btn')) {
        mentoringNarrowStart();
      }
      else {
        $this.parent().css('left', horizMath + 'px' )
        $(this).addClass('has-bubble-open')
          .siblings().removeClass('has-bubble-open')
      }
    }
  });
}

$(window).scroll(function(){
  youtubeVidScroll();
  startMentoring();
});


function youtubeVidScroll() {
  var wScroll = $(window).scrollTop();

  $('.video-strip').css('background-position', 'center -' + wScroll + 'px');
}

function startMentoring() {
  var wScroll = $(window).scrollTop();

  if($('section.mentoring').offset().top - 500 < wScroll) {
    if(wScroll && $(window).width() > 640) {
      $('.faces').addClass('launched');
      if(!$('.face').hasClass('has-bubble-open')) {
        setTimeout(function(){
          $('.face:nth-child(3)').addClass('has-bubble-open');
        }, 400)
      }
    }
    else {
      if(!$('.face').hasClass('has-bubble-open')) {
        mentoringNarrowStart();
      }
    }
  }
}

$(window).resize(function() {
  if($(window).width() > 640) {
    mentoringWideStart();
  }
  else {
    mentoringNarrowStart();
  }
})

function mentoringWideStart () {
  $('.faces').css({
    'top': '0px',
    'left': '0px'
  });
  $('.face:nth-child(3)')
    .addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open')
}

function mentoringNarrowStart () {
  $('.faces').css({
    'top': '230px',
    'left': '0px'
  });
  $('.face').first()
    .addClass('has-bubble-open')
    .siblings().removeClass('has-bubble-open')
}





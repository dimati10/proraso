$(function () {

  //scroll to top

  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
  });

  //tabs

  $('.features__tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.features__inner').find('.features__tab-item').removeClass('active-tab').hide();
    $('.features__tabs').find('.features__tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });
  

  $('.reviews__tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.reviews__box').find('.reviews__tab-item').removeClass('active-tab').hide();
    $('.reviews__tabs').find('.reviews__tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id).addClass('active-tab').fadeIn();
    return false;
  });

});


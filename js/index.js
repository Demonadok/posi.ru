$('.toggle').focusin(function() {
  $(this).addClass('active');
  $('.search').addClass('move');
});

$('.toggle').focusout(function() {
  $(this).removeClass('active').val("");
  $('.search').removeClass('move');
});
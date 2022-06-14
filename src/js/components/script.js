const closeBtn = $('.btn-close'),
  burgerBtn = $('.burger'),
  menu = $('.nav'),
  warning = $('.warning');

closeBtn.on('click', function() {
  $('.warning').removeClass('active');
  $('.header').css('marginTop', '0');
});

burgerBtn.on('click', function() {
  $(this).toggleClass('active');
  menu.toggleClass('active');
});
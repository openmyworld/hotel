$(function(){
  $('#check-in').dropdownDatepicker({
    wrapperClass    : 'room__check-in-group',
    monthShortValues: ['1','2','3','4','5','6', '7', '8', '9', '10', '11', '12'],
    monthFormat     : 'short',
    yearLabel       : '',
    monthLabel      : '',
    dayLabel        : '',
    daySuffixes     : false,
    allowPast       : false,
    sortYear        : 'asc',
    submitFieldName : 'check-in',
  });

  $('#check-out').dropdownDatepicker({
    wrapperClass    : 'room__check-out-group',
    monthShortValues: ['1','2','3','4','5','6', '7', '8', '9', '10', '11', '12'],
    monthFormat     : 'short',
    yearLabel       : '',
    monthLabel      : '',
    dayLabel        : '',
    daySuffixes     : false,
    allowPast       : false,
    sortYear        : 'asc',
    submitFieldName : 'check-out',
  });

  // Insert: div tag wrap, text for day, month and year, image to check-in
  $('.room__check-in-group .year').wrap('<div class="room__wrap-year"></div>');
  $('.room__check-in-group .month').wrap('<div class="room__wrap-month"></div>');
  $('.room__check-in-group .day').wrap('<div class="room__wrap-day"></div>');
  $('.room__check-in-group').append('<img src="img/calendar.png" class="room__calendar-image">');

  if (matchMedia("(max-width: 768px)").matches) {
    $('.room__wrap-year').append('<span class="room__year-text">年</span>');
    $('.room__wrap-month').append('<span class="room__month-text">月</span>');
    $('.room__wrap-day').append('<span class="room__day-text">日</span>');
  }

  else {
    $('.room__wrap-year').append(' <span class="room__year-text">年</span> ');
    $('.room__wrap-month').append(' <span class="room__month-text">月</span> ');
    $('.room__wrap-day').append(' <span class="room__day-text">日</span> ');
  }

  // Insert: div tag wrap, text for day, month and year, image to check-out
  $('.room__check-out-group .year').wrap('<div class="room__wrap-year"></div>');
  $('.room__check-out-group .month').wrap('<div class="room__wrap-month"></div>');
  $('.room__check-out-group .day').wrap('<div class="room__wrap-day"></div>');  
  $('.room__check-out-group').append('<img src="img/calendar.png" class="room__calendar-image">');

  if (matchMedia("(max-width: 768px)").matches) {
    $('.room__check-out-group .room__wrap-year').append('<span class="room__year-text">年</span>');
    $('.room__check-out-group .room__wrap-month').append('<span class="room__month-text">月</span>');
    $('.room__check-out-group .room__wrap-day').append('<span class="room__day-text">日</span>');
  }

  else {
    $('.room__check-out-group .room__wrap-year').append(' <span class="room__year-text">年</span> ');
    $('.room__check-out-group .room__wrap-month').append(' <span class="room__month-text">月</span> ');
    $('.room__check-out-group .room__wrap-day').append(' <span class="room__day-text">日</span> ');
  }

  // Toggle slide room search
  $('.room__vacancy-heading').click(function (){
    $('.room__inner').slideToggle();
    $('.room__vacancy-heading').toggleClass('room__vacancy-search-border');
  });

  // Buttom hamburger menu for SP
  $('.hamburger').click(function() {
    $(this).toggleClass('is-active');
    $('.menu .container').slideToggle();
  });

  $('.news__tab .news__tab-link').on('click', function(e) {
    var currentAttrValue = $(this).attr('href');
    // Show/Hide tabs content
    $('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
    // Change/remove current tab to active
    $(this).addClass('news__tab-link_active').parent('li').siblings().children().removeClass('news__tab-link_active');
    e.preventDefault();
  });

  if (matchMedia( "(max-width: 768px)" ).matches) {

    // Remove separator item on menu for SP
    $('.menu__separator').parent().remove();

    // Create select tag for tab
    let list   = $('.news__tab');
    let select = $("<select class='news__tab_sp' />");

    list.find('.news__tab-link').each(function() {
      select.append( $('<option class="news__tab-link_sp" />').attr( 'value', $(this).attr('href').substr(1) ).text( $(this).parent().text() ) );
    });

    list.replaceWith( select );
    select.wrap( '<div class="news__wrapper-tab" />' );
    $('<i class="news__wrapper-arrow"></i>').insertAfter(select);

    // Select tag category on SP
    $('.news__tab_sp').change(function() {
      $('.news__group').hide();
      $( '#' + $(this).val() ).show();
    });
  }
  
});

var swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});

if (matchMedia("(max-width: 767px)").matches) {
  $('.footer-links__title').click(function() {
    $(this).next().slideToggle().prev().toggleClass('footer-links__title_active');
  });
}
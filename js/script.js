let toggle = $('.toggle');
let month = $('.month');
let annual = $('.annual');

$(toggle).click(function (e) { 
  e.preventDefault();
  $(toggle).toggleClass('active');
  $(month).toggleClass('active');
  $(annual).toggleClass('active');
});

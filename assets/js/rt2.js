//background img effect
$(document).ready(function() {

    $('.article-container').mouseover(function() {
  
        $(this).find('.article-img-holder').css('transform', 'scale(1.2)');
    });
  
    $('.article-container').mouseout(function() {
  
        $(this).find('.article-img-holder').css('transform', 'scale(1)');
    });
  });
  
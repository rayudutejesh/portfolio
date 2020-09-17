
        $(document).ready(function () {
            $(window).scroll(function () {
                $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
                $("w3-sidebar").toggleClass("w3-sidebarab", $(this).scrollTop() > 300);
            });
           
            // $('.active').click(function () {
            //     $('.datacard').collapse('toggle');
            // });

            if (screen.width >= 776) {
                $(".card_price").addClass("fixedposition");
                $(".card_container").addClass("card_container_pc");
                $(".for_trip").addClass("for_trip_pc");
            } else {
                $(".card_container").addClass("card_container_mobile");

              //  $(".route")[0].style.display = "none";
            }

            $(".activity .plan").on('click', function () {
                $(this).siblings().removeClass('active3');
                $(this).siblings().removeClass('active3');
                $(this).addClass('active3');
            });
            $(".itinerary .Visa").on('click', function () {
                $(this).siblings().removeClass('active2');
                $(this).siblings().removeClass('active2');
                $(this).addClass('active2');

            });

            $("#visa1").on("click", function () {
                $(".cardboxbody").css("display", "block");
                $(".activity").css("display", "flex");
                $("#policy").css("display", "none");
                $("#similar").css("display", "none");
                $("#flig").css("display", "none");
                $("#flig1").css("display", "none");
                $("#flig2").css("display", "none");
                $("#flig3").css("display", "none");
                $("#flig4").css("display", "none");


            })
            $("#flight6").on("click", function () {
                $(".cardboxbody").css("display", "block");

                $("#policy").css("display", "none");


            })
            $("#visa2").on("click", function () {
                $(".cardboxbody").css("display", "none");
                $(".activity").css("display", "none");
                $("#policy").css("display", "block");
                $("#similar").css("display", "none");
                $("#flig").css("display", "none");
                $("#flig1").css("display", "none");
                $("#flig2").css("display", "none");
                $("#flig3").css("display", "none");
                $("#flig4").css("display", "none");

            })
            $("#visa3").on("click", function () {
                $(".cardboxbody").css("display", "none");
                $(".activity").css("display", "none");
                $("#policy").css("display", "none");
                $("#similar").css("display", "block");
                $("#flig").css("display", "none");
                $("#flig1").css("display", "none");
                $("#flig2").css("display", "none");
                $("#flig3").css("display", "none");
                $("#flig4").css("display", "none");

            })

            $("#flight").on("click", function () {
                $(".cardboxbody").css("display", "none");
                $("#similar").css("display", "none");
                $("#flig").css("display", "block");
                $("#flig1").css("display", "none");
                $("#flig1").css("display", "none");
                $("#flig2").css("display", "none");
                $("#flig3").css("display", "none");
                $("#flig4").css("display", "none");

            })
            $("#flight2").on("click", function () {
                $(".cardboxbody").css("display", "none");
                $("#flig").css("display", "none");
                $("#flig1").css("display", "block");
                $("#flig2").css("display", "none");
                $("#flig3").css("display", "none");
                $("#flig4").css("display", "none");
                $("#similar").css("display", "none");
            })
            $("#flight6").on("click", function () {
                $(".cardboxbody").css("display", "block");
                $("#flig").css("display", "none");
                $("#flig1").css("display", "none");
                $("#flig2").css("display", "none");
                $("#flig3").css("display", "none");
                $("#flig4").css("display", "none");
                $("#similar").css("display", "none");

            })
            $("#flight3").on("click", function () {
                $(".cardboxbody").css("display", "none");
                $("#flig").css("display", "none");
                $("#flig1").css("display", "none");
                $("#flig2").css("display", "block");
                $("#flig3").css("display", "none");
                $("#flig4").css("display", "none");
                $("#similar").css("display", "none");

            })
            $("#flight4").on("click", function () {
                $(".cardboxbody").css("display", "none");
                $("#flig").css("display", "none");
                $("#flig1").css("display", "none");
                $("#flig2").css("display", "none");
                $("#flig3").css("display", "block");
                $("#flig4").css("display", "none");
                $("#similar").css("display", "none");

            })
            $("#flight5").on("click", function () {
                $(".cardboxbody").css("display", "none");
                $("#flig").css("display", "none");
                $("#flig1").css("display", "none");
                $("#flig2").css("display", "none");
                $("#flig3").css("display", "none");
                $("#flig4").css("display", "block");
                $("#similar").css("display", "none");

            })

        });
        function savesubcat() {
            return null;
        }

        


//sticky day_plan function////////////////
$(window).scroll(function(e){ 
    var $el = $('.activity'); 
    
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 450 && !isPositionFixed){ 
        
      $el.css({'position': 'fixed','top':'10vh','z-index':'100','height':'','border':'','width':'70%'}); 
    }
    if($(this).scrollTop() < 450 && isPositionFixed){
      $el.css({'position': 'static','height':'60px','width':'100%'}); 
    } 
  });
  //sticky daylist funnction/////////////////////
  $(window).scroll(function(e){ 
    var $el = $('.day_list'); 
    
    var isPositionFixed = ($el.css('position') == 'fixed');
    if ($(this).scrollTop() > 450 && !isPositionFixed){ 
      $el.css({'position': 'fixed','top': '170px','width':'100px','z-index':'100'}); 
      $(".cardboxbody").css({'top': '80px'});
    }
    if($(this).scrollTop() < 450 && isPositionFixed){
      $el.css({'position': 'static', 'top': '0','width':'100%'});
      $(".cardboxbody").css({'top': '0'}); 
    } 
  });
  //scrolling top on refresh///
  $(window).on('beforeunload', function() {
    $('body').hide();
    $(window).scrollTop(0);
  });


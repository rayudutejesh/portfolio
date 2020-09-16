
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

                $(".route")[0].style.display = "none";
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

        

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("headr");
var resume = document.getElementById("rout");
var day_list = document.getElementById("day_list");
var price_card = document.getElementById("price");
// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  
   
    if (window.pageYOffset > 270) {
     
        resume.classList.add("sticky");
        $('.resume').css({
            'margin-top': '10%',
            'padding-left':'1.6vw'
         
        });
      
    
      } else {
       
        resume.classList.remove("sticky");
        $('.resume').css({
            'margin-top': '0px',
            'padding-left':'0px'
         
        });
     }
  if (window.pageYOffset > 430) {
        header.classList.add("sticky");
    day_list.classList.add("sticky");
    $('.datacard').css({
        'margin-top': '20%'
    });
    $('.day_list').css({
        'margin-top': '110%'
    });
    
  } else {
    header.classList.remove("sticky");
    day_list.classList.remove("sticky");
    
    $('.datacard').css({
        'margin-top': '5%'
    });
    $('.day_list').css({
        'margin-top': '-160%',
        'left':'-10%'
    });
    
    
    }
}




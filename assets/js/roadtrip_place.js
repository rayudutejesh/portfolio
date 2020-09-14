
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
                $(this).siblings().removeClass('active');
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
            $(".itinerary .Visa").on('click', function () {
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

        function hovereffect() {
            let dis = document.getElementsByClassName("onhover1");

            for (let i = 0; i < dis.length; i++) {
                dis[i].style.display = "inline";


            }



        }
        function hoverout() {
            dis = document.getElementsByClassName("onhover1");

            for (let i = 0; i < dis.length; i++) {
                dis[i].style.display = "none";

            }
        }

        function w3_open() {

            dis = document.getElementsByClassName("onhover1");
            let atag = document.getElementsByClassName("w3-button  ");
            let na = document.getElementsByClassName("w3-sidebar");
            if (dis[0].style.display == "none") {
                for (let i = 0; i < dis.length; i++) {
                    dis[i].style.display = "inline";
                    atag[i].style.display = "inline";

                    if (screen.width <= 776) {
                        na[0].style.background = "white";
                    }
                }
            } else {
                for (let i = 0; i < dis.length; i++) {
                    dis[i].style.display = "none";
                    if (screen.width <= 776) {
                        atag[i].style.display = "none";
                        na[0].style.background = "transparent";
                    }

                }
            }

        }

        function w3_close() {
            document.getElementById("mySidebar").style.display = "none";
        }

$(document).ready(function () {
    $('#forlogin').click(function () {
      $('#exampleModal').modal('hide');
    });
    $('#forsignup').click(function () {
      $('#exampleModal2').modal('hide');
    });
    $(window).scroll(function () {
      $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
      $("w3-sidebar").toggleClass("w3-sidebar", $(this).scrollTop() > 300);
    });


    $("#s1").focusin(function () {
      $(this).children("label").css("color", "#EC5B24");
      $(this).children("underline").addClass("acti");


    });
    $("#s1").focusout(function () {
      $(this).children("label").css("color", "white");
      $(this).children("underline").removeClass("acti");
    });
    $("#s2").focusin(function () {
      $(this).children("label").css("color", "#EC5B24");


    });
    $("#s2").focusout(function () {
      $(this).children("label").css("color", "white")
    });
    $("#s3").focusin(function () {
      $(this).children("label").css("color", "#EC5B24");


    });
    $("#s3").focusout(function () {
      $(this).children("label").css("color", "white")
    });
    $("#s4").focusin(function () {
      $(this).children("label").css("color", "#EC5B24");


    });
    $("#s4").focusout(function () {
      $(this).children("label").css("color", "white")
    });

    $('.dropdown-toggle').dropdown();

    $("#adu p").on('click', function () {
      $(this).siblings().removeClass('activemem');

      $(this).addClass('activemem');
    });
    $("#chi p").on('click', function () {
      $(this).siblings().removeClass('activemem');

      $(this).addClass('activemem');
    });
    $("#room p").on('click', function () {
      $(this).siblings().removeClass('activemem');

      $(this).addClass('activemem');
    });

    $("#ch0").click(function () {
      let ch = $("#cho").val();

      $("#room").attr("value", "solo    2 Guests 1 Room")
    });




  });


  function change_hight() {
    let c = document.getElementById("filter2");
    c.classList.add("row");
    document.getElementById("filter2").style.display = "flex";
    document.getElementById("more").style.display = "none";

  }
  function change_hight2() {
    document.getElementById("filter2").style.display = "none";
    document.getElementById("filter2").classList.remove("row");
    document.getElementById("more").style.display = "block";


  }

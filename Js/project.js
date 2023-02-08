$(".colors-button").on("click", function() {
    var primaryColor = $(this).css("--theme-primary");
    var secondaryColor = $(this).css("--theme-secondary");
    var bgColor = $(this).css("--theme-bg");
    var textColor = $(this).css("--theme-text");
  
    $(".colors-button").removeClass("active");
    $(this).addClass("active");
  
    $(document.body).css("--primary-color", primaryColor);
    $(document.body).css("--secondary-color", secondaryColor);
    $(document.body).css("--bg-color", bgColor);
    $(document.body).css("--text-color", textColor);
    $("iframe_test").contents().find(".content-iframe").css("background-color", "blue");
  });

$(".nav-links--link").on("click", function() {
    $(".nav-links--link").removeClass("active");
    $(this).addClass("active");
  });
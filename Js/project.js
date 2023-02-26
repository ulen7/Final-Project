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

    // Get the iframe element
    var iframe = $("#iframe_1")[0];

    // Get the contents of the iframe
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Update the CSS styles of the elements inside the iframe
    $(iframeDoc).find("body").css("--primary-color", primaryColor);
    $(iframeDoc).find("body").css("--secondary-color", secondaryColor);
    $(iframeDoc).find("body").css("--bg-color", bgColor);
    $(iframeDoc).find("body").css("--text-color", textColor);
});

$(".nav-links--link").on("click", function() {
    $(".nav-links--link").removeClass("active");
    $(this).addClass("active");
  });

$(document).ready(function() {
    $('#button-color').click(function() {
      var color = window.getComputedStyle($('#button-color').get(0)).getPropertyValue('background-color');
      $('iframe[name="iframe_1"]').contents().find('body').css('background-color', color);
    });
  });
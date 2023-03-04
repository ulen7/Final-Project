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

    var iframe = $("#iframe_1")[0];

    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

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


window.onload = () => {

const images = document.querySelectorAll('.img_we');

images.forEach((img) => {
  img.addEventListener('load', () => {
    img.style.transition = 'transform 2s ease-in-out, width 3s ease-in-out, height 3s ease-in-out';
    img.style.transform = 'rotate(720deg) scale(2)'; 

    img.addEventListener('transitionend', () => {
      img.style.transition = 'transform 2s ease-in-out, width 3s ease-in-out, height 3s ease-in-out';
      img.style.transform = 'rotate(-720deg) scale(1)';
    }, { once: true });
  });

  if (img.complete) {
    img.dispatchEvent(new Event('load'));
  }
});
}

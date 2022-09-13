$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("body,html").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1200,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

var toolsImages = [
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  "https://reactnative.dev/img/header_logo.svg",
  "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
  "https://cdn.worldvectorlogo.com/logos/arduino-1.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
];

function renderSkillsToolsImages() {
  for (let i = 0; i < toolsImages.length; i++) {
    $(".skills-assets").append(`<img src="${toolsImages[i]}" >`);
  }
}

renderSkillsToolsImages();

var width = $(window).width();

window.onscroll = function () {
  if (width >= 900) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      $("#middle").css("background-size", "150% auto");
    } else {
      $("#middle").css("background-size", "100% auto");
    }
  }
};

setTimeout(function () {
  $("#loading").addClass("animated fadeOut");
  setTimeout(function () {
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display", "none");
  }, 800);
}, 1450);

$(document).ready(function(){
  // Hide the toTop button when the page loads.
  $("#toTop").css("display", "none");

  // This checks which position the user scrolls the page.
  $(window).scroll(function(){
    // Only trigger the displayBrandName function on the frontpage.
    if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
      displayBrandName();
    };
    displayToTopButton();
  })

  // This controls the display of nav-brand-name upon scroll down on the frontpage only
  function displayBrandName() {
    if($(window).scrollTop() > 440) {
      $("#nav-brand-name").removeClass("d-none");
    }
    else {
      $('#nav-brand-name').addClass('d-none');
    }
  }

  // This controls the display of the toTop button on scroll down and up
  function displayToTopButton() {
    // Check weather the user has scrolled down (if "scrollTop()" is more than 0)
    if($(window).scrollTop() > 0){
      // If it's more than or equal to 0, show the toTop button.
      $("#toTop").fadeIn("slow");
    }
    else {
      // If it's less than 0 (at the top), hide the toTop button.
      $("#toTop").fadeOut("slow");
    }
  }

  // When the user clicks the toTop button, we want the page to scroll to the top slowly.
  $("#toTop").click(function(event){
  // Disable the default behaviour when a user clicks an empty anchor link.
  // (The page jumps to the top instead of animating)
  event.preventDefault();
  // Animate the scrolling motion.
  $("html, body").animate({
    scrollTop: 0
    },"slow");
  });
});


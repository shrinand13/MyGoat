window.addEventListener('load', function() {
    var transitionOverlay = document.getElementById('transition-overlay');
    transitionOverlay.addEventListener('animationend', function() {
      transitionOverlay.style.display = 'none';
    });
  });



const switchToggles = document.querySelectorAll('.switch-toggle');

switchToggles.forEach(switchToggle => {
  switchToggle.addEventListener('click', () =>{
    switchToggle.classList.toggle('switch-toggle--eng');
    if(switchToggle.classList.contains('switch-toggle--eng')) {
      switchToggle.setAttribute('aria-checked', 'true');
      setTimeout(() => {
        window.location.href = 'http://en.xdayx5t3.beget.tech/';
      }, 500)
    } else {
      switchToggle.setAttribute('aria-checked', 'false');
    }
  });

});

// если имеет en, то выставить toggle


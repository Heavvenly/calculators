
  function handleClick(page) {
    // add the 'active' class to the overlay
    document.querySelector('.overlay').classList.add('active');

    // wait for a short delay, then navigate to the new page
    setTimeout(function() {
      window.location = page;
    }, 800); // 500 milliseconds delay
  }

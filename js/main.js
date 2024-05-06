document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener('scroll', function () {

    if (window.scrollY > 200) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar_top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});

// Header JS Ends

$('.hero-slider').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  dots: false,
  autoplay: true,
  animateOut: 'fadeOut',
  navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

$('.at-glance').owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  autoplay: 3000,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
})

$('.about-slides').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  autoplay: true,
  animateOut: 'fadeOut',
  navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 2
    }
  }
})

$('.vues-blocks').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  autoplay: true,
  animateOut: 'fadeOut',
  navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 2
    }
  }
})

$('.physical').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: false,
  autoplay: true,
  animateOut: 'fadeOut',
  navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

jQuery(document).ready(function () {
  jQuery('td').each(function () {
    var text = jQuery(this).text();
    jQuery(this).text(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
  });
});


// jQuery(document).ready(function () {
//   jQuery('#dob').attr('placeholder', 'Date of Birth');
// });

jQuery(document).ready(function () {
  jQuery('#dob').on('click', function () {
    jQuery(this).attr('type', 'text').attr('placeholder', 'dd----yyyy').attr('type', 'date');
  });
});